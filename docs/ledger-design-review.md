# Ledger design review — do not deploy the proposed SQL unchanged

The supplied schema is a useful prototype, but it is not yet safe to call production-ready.

## Issues to resolve before migration

1. **Withdrawal requests and ledger entries are different records.** A request can be pending, approved, rejected or cancelled. A financial ledger entry should represent a completed movement of funds and should be append-only. Putting mutable request statuses on the same `transactions` rows weakens the immutability guarantee.
2. **The trigger only runs on INSERT.** The proposed trigger does not validate later UPDATEs that change a debit's amount, student, or status from `rejected` back to an active status.
3. **The trigger has a concurrency race.** Two simultaneous requests can both read the same balance and pass unless the database serializes operations per student (for example, by locking a stable student/wallet row inside a transaction and recalculating after acquiring the lock).
4. **The balance view needs a deliberate definition.** A request reservation is not a completed debit. Keep `posted_balance`, `reserved_amount`, and `available_balance` conceptually distinct. A completed debit should be posted once; a live request should reserve funds once.
5. **Ledger immutability needs permissions and database enforcement.** RLS alone is not a substitute for revoking UPDATE/DELETE on ledger rows from application roles and exposing narrowly scoped database functions for posting entries and changing request states.
6. **A role column is not self-protecting.** Users must not be able to set their own role. Provision roles through trusted admin-only server/database paths, and verify the authenticated user and role inside security-definer functions.

## Recommended model

- `profiles`: Supabase user profile and role.
- `student_guardians`: many-to-many student/parent relationships (supports more than one guardian and more than one child).
- `wallets`: one wallet per student, used as a stable row to lock while reserving/posting funds; do not expose direct balance edits.
- `withdrawal_requests`: request lifecycle and reservation state.
- `wallet_transactions`: append-only posted credits/debits, created only by trusted database functions.

Any cached wallet balance must be updated in the same database transaction as the ledger entry and reconciled against the sum of ledger entries. Alternatively, calculate it from the ledger until performance requires a cached projection.

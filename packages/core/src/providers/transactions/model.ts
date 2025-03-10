import type { TransactionReceipt, TransactionResponse } from '@ethersproject/abstract-provider'

/**
 * @public
 */
export interface StoredTransaction {
  transaction: TransactionResponse
  submittedAt: number
  receipt?: TransactionReceipt
  lastCheckedBlockNumber?: number
  transactionName?: string
  originalTransaction?: TransactionResponse
}

/**
 * @public
 */
export function getStoredTransactionState(transaction: StoredTransaction) {
  if (transaction.receipt) {
    return transaction.receipt.status === 0 ? 'Fail' : 'Success'
  }
  return 'Mining'
}

/**
 * @public
 */
export type StoredTransactions = {
  [chainId: number]: StoredTransaction[]
}

/**
 * @internal Intended for internal use - use it on your own risk
 */
export const DEFAULT_STORED_TRANSACTIONS: StoredTransactions = {}

export type Allowance = {
  id: number
  name: string
  renewal: 'week' | 'month' | 'year'
  currency: string
  amount: string
  spent: string
  active: boolean
  type: 'expense' | 'card'
}

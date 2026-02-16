import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/dashboard/Dashboard.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/transaction-expense',
      name: 'TransactionExpense',
      component: () => import('@/views/transaction/TransactionExpense.vue'),
      meta: {
        title: 'Transaction Expense',
      },
    },
    {
      path: '/transaction-income',
      name: 'TransactionIncome',
      component: () => import('@/views/errors/UnderConstruction.vue'),
      meta: {
        title: 'Transaction Income',
      },
    },
    {
      path: '/transaction-transfers',
      name: 'TransactionTransfers',
      component: () => import('@/views/errors/UnderConstruction.vue'),
      meta: {
        title: 'Transaction Transfers',
      },
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Personal Cashflow`
  next()
})

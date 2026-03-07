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
      component: () => import('@/views/transaction/TransactionIncome.vue'),
      meta: {
        title: 'Transaction Income',
      },
    },
    {
      path: '/transaction-transfer',
      name: 'TransactionTransfer',
      component: () => import('@/views/transaction/TransactionTransfer.vue'),
      meta: {
        title: 'Transaction Transfer',
      },
    },
    {
      path: '/transaction-saving',
      name: 'TransactionSaving',
      component: () => import('@/views/transaction/TransactionSaving.vue'),
      meta: {
        title: 'Transaction Saving',
      },
    },
    {
      path: '/budgeting-main',
      name: 'BudgetingMain',
      component: () => import('@/views/budgeting/Budgeting.vue'),
      meta: {
        title: 'Budgeting',
      },
    },
    {
      path: '/assets',
      name: 'Assets',
      component: () => import('@/views/errors/UnderConstruction.vue'),
      meta: {
        title: 'Assets',
      },
    },
    {
      path: '/setup',
      name: 'Setup',
      component: () => import('@/views/setup/Setup.vue'),
      meta: {
        title: 'Setup',
      },
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Personal Cashflow`
  next()
})

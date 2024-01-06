import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProductsForm from '@/components/ProductsForm'
import CustomerForm from '@/components/CustomerForm'
import ProductList from '@/components/ProductList'
import CustomerList from '@/components/CustomerList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/products-form',
      name: 'ProductsForm',
      component: ProductsForm
    },
    {
      path: '/customer-form',
      name: 'CustomerForm',
      component: CustomerForm
    },
    {
      path: '/product-list',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/customer-list',
      name: 'CustomerList',
      component: CustomerList
    }
  ]
})

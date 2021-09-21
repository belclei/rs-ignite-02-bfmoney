import React from 'react'
import ReactDOM from 'react-dom'
import { createServer } from 'miragejs'
import { App } from './App'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        { id: 1, title: 'Transaction 1', amount: 400, type: 'deposit', category: 'Food', createdAt: new Date() },
        { id: 10, title: 'Servicinho', amount: 2000, type: 'deposit', category: 'Tech', createdAt: new Date() },
        { id: 2, title: 'Shopping', amount: 350, type: 'deposit', category: 'Other', createdAt: new Date() },
        { id: 3, title: 'Placa de vídeo', amount: 5400, type: 'deposit', category: 'Tech', createdAt: new Date() }
      ]
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import Shell from './components/shell'
import GlobalStyle from './lib/global-style'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Shell />
  </QueryClientProvider>,
)

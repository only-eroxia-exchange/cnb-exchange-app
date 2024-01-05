import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Shell from './components/shell'
import GlobalStyle from './lib/global-style'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Shell />
  </QueryClientProvider>,
)

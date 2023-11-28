'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import SidebarWithHeader from './components/Sidebar'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <body className={inter.className}>
            <SidebarWithHeader>
              {children}
            </SidebarWithHeader>
            <Toaster />
          </body>
        </ChakraProvider>
      </QueryClientProvider>
    </html>
  )
}

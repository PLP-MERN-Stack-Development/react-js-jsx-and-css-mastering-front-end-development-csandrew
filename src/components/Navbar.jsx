import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        <div>
          <button
            onClick={toggleTheme}
            className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </header>
  )
}

"use client"

import { useState } from "react"
import JobSearchForm from "../components/job-search-form"
import JobNotifications from "../components/job-notifications"

export default function Home() {
  const [searchCriteria, setSearchCriteria] = useState({ keywords: "", location: "" })

  const handleSearch = (criteria: { keywords: string; location: string }) => {
    setSearchCriteria(criteria)
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notificações de busca de emprego no LinkedIn</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <JobSearchForm onSearch={handleSearch} />
        <JobNotifications searchCriteria={searchCriteria} />
      </div>
    </main>
  )
}


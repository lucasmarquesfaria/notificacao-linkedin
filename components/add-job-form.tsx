"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface Job {
  id: string
  title: string
  company: string
  location: string
}

interface AddJobFormProps {
  onJobAdded: (job: Job) => void
}

export default function AddJobForm({ onJobAdded }: AddJobFormProps) {
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, company, location }),
    })

    if (response.ok) {
      const newJob = await response.json()
      onJobAdded(newJob)
      setTitle("")
      setCompany("")
      setLocation("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Adicionar Nova Vaga</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título da Vaga</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Localização</Label>
            <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">
            Adicionar Vaga
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}


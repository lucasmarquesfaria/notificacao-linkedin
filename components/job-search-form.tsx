"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface JobSearchFormProps {
  onSearch: (criteria: { keywords: string; location: string }) => void
}

export default function JobSearchForm({ onSearch }: JobSearchFormProps) {
  const [keywords, setKeywords] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch({ keywords, location })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
        Definir critérios de procura de emprego</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keywords">Palavras-chave</Label>
            <Input
              id="keywords"
              placeholder="e.g. Software Engineer, React"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Localização</Label>
            <Input
              id="location"
              placeholder="e.g. New York, Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
          Pesquisar empregos
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}


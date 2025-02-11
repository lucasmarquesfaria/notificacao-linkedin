import { type NextRequest, NextResponse } from "next/server"

const mockJobs = [
  { id: "1", title: "Software Engineer", company: "Tech Co", location: "San Francisco, CA" },
  { id: "2", title: "Product Manager", company: "Startup Inc", location: "New York, NY" },
  { id: "3", title: "Data Scientist", company: "Big Data Corp", location: "Remote" },
  { id: "4", title: "Frontend Developer", company: "Web Solutions", location: "London, UK" },
  { id: "5", title: "UX Designer", company: "Creative Agency", location: "Berlin, Germany" },
  { id: "6", title: "DevOps Engineer", company: "Cloud Services Ltd", location: "Seattle, WA" },
  { id: "7", title: "Marketing Specialist", company: "Global Brand", location: "Toronto, Canada" },
  { id: "8", title: "Mobile App Developer", company: "App Innovators", location: "Austin, TX" },
  { id: "9", title: "AI Research Scientist", company: "Future Tech", location: "Boston, MA" },
  { id: "10", title: "Cybersecurity Analyst", company: "Secure Net", location: "Washington, DC" },
  { id: "11", title: "Junior PHP Developer", company: "Web Devs", location: "São Paulo, Brazil", skills: ["PHP", "Laravel"] },
  { id: "12", title: "Junior Laravel Developer", company: "Tech Solutions", location: "Remote", skills: ["PHP", "Laravel"] },
]

export async function GET() {
  const jobKeywords = ["PHP", "Laravel"];
  const juniorKeywords = ["Junior", "Jr"];

  const filteredJobs = mockJobs.filter(
    (job) =>
      jobKeywords.some((keyword) => job.skills?.includes(keyword)) &&
      juniorKeywords.some((keyword) => job.title.includes(keyword))
  );

  return NextResponse.json(filteredJobs);
}

export async function POST(request: NextRequest) {
  const job = await request.json()
  const newJob = {
    id: (mockJobs.length + 1).toString(),
    ...job,
  }
  mockJobs.push(newJob)
  return NextResponse.json(newJob, { status: 201 })
}
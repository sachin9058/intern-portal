export async function GET() {
  const dummyData = [
    { name: 'Sachin Kumar', code: 'sachin2025', amount: 15000 },
    { name: 'Anjali Verma', code: 'anjali2025', amount: 13200 },
    { name: 'Rohan Mehta', code: 'rohan2025', amount: 10900 },
    { name: 'Simran Kapoor', code: 'simran2025', amount: 8900 },
    { name: 'Vikas Sharma', code: 'vikas2025', amount: 7200 },
  ]

  return Response.json(dummyData)
}

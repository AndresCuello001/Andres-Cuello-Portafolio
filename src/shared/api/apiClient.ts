const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5156/api'

export async function apiClient<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  })

  if (!response.ok) throw new Error(`API request failed with status ${response.status}`)
  return response.json() as Promise<T>
}

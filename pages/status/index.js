import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  return (
    <main>
      <h1>Status</h1>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <section>
          <div>
            <strong>Last updated: </strong>
            <span>{new Date(data.updated_at).toLocaleString("pt-BR")}</span>
          </div>
          <div>
            <strong>Database Version: </strong>
            <span>{data.dependencies.database.version}</span>
          </div>
          <div>
            <strong>Opened Connections: </strong>
            <span>{data.dependencies.database.opened_connections}</span>
          </div>
          <div>
            <strong>Max Connections: </strong>
            <span>{data.dependencies.database.max_connections}</span>
          </div>
        </section>
      )}
    </main>
  );
}

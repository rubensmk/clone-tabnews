import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  response.status(200).json({
    status: "ok",
    result: result.rows[0].sum,
  });
}

export default status;

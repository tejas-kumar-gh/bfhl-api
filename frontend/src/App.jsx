import { useState } from "react";

const API_BASE =import.meta.env.VITE_API_URL;;

export default function App() {
  const [key, setKey] = useState("fibonacci");
  const [value, setValue] = useState("");
  const [response, setResponse] = useState(null);

  const fetchJSON = async (url, options = {}) => {
    const res = await fetch(url, options);
    return res.json();
  };

  const testHealth = async () => {
    setResponse(await fetchJSON(`${API_BASE}/health`));
  };

  const testBFHL = async () => {
    const bodyMap = {
      fibonacci: { fibonacci: Number(value) },
      prime: { prime: value.split(",").map(Number) },
      lcm: { lcm: value.split(",").map(Number) },
      hcf: { hcf: value.split(",").map(Number) },
      AI: { AI: value }
    };

    const body = bodyMap[key];
    if (!body) return;

    const data = await fetchJSON(`${API_BASE}/bfhl`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    setResponse(data);
  };

  return (
    <div className="container">
      <h1>BFHL API Tester</h1>

      <button onClick={testHealth}>Test /health</button>

      <hr />

      <select value={key} onChange={(e) => setKey(e.target.value)}>
        {["fibonacci", "prime", "lcm", "hcf", "AI"].map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      <input
        placeholder={key === "AI" ? "Ask a question" : "Enter values (1,2,3)"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={testBFHL}>Test /bfhl</button>

      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}

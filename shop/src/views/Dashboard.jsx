import React, { useEffect, useMemo, useState } from "react";
import Loading from "../components/Loading";

/**
 * Minimal Sales Dashboard placeholder.
 * Real analytics would aggregate sales; here we compute simple derived values from product list.
 */
const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
  // The following utilizes immediate invocation.
    (async () => {
      try {
        const resp = await fetch('https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json');
        const products = await resp.json();
        setData(products);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
      })();

    }, []);

  const totals = useMemo(() => {
    if (!data) return { count: 0, avgPrice: 0, totalInventoryValue: 0 };
    const count = data.length;
    const sumPrice = data.reduce((s, p) => s + (p.price || 0), 0);
    const avg = count ? sumPrice / count : 0;
    const invVal = data.reduce((s, p) => s + (p.stock || 0) * (p.price || 0), 0);
    return { count, avgPrice: avg, totalInventoryValue: invVal };
  }, [data]);

  if (!data) return <Loading message="Loading dashboard..." />;

  return (
    <div>
      <h1>Sales Dashboard (Admin)</h1>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12}}>
        <div className="card">
          <h3>Total Products</h3>
          <div style={{fontSize:24, fontWeight:700}}>{totals.count}</div>
        </div>
        <div className="card">
          <h3>Average Price</h3>
          <div style={{fontSize:24, fontWeight:700}}>${totals.avgPrice.toFixed(2)}</div>
        </div>
        <div className="card">
          <h3>Inventory Value</h3>
          <div style={{fontSize:24, fontWeight:700}}>${totals.totalInventoryValue.toFixed(2)}</div>
        </div>
      </div>

      <section style={{marginTop:16}}>
        <h2>Top products by price</h2>
        <div className="grid">
          {[...data].sort((a,b)=> (b.price||0)-(a.price||0)).slice(0,6).map(p => (
            <div key={p.id} className="card">
              <div style={{fontWeight:700}}>{p.title || p.name}</div>
              <div style={{color:"#666"}}>${(p.price||0).toFixed(2)}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
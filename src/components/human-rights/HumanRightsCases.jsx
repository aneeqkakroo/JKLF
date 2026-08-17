import { useMemo, useState } from "react";
import { Search, ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { humanRightsCases, humanRightsCategories } from "../../data/humanRights";
import { Badge, Container, Section, SectionHeader } from "../ui";
import "./human-rights.css";

export default function HumanRightsCases() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCases = useMemo(() => {
    const search = query.trim().toLowerCase();
    return humanRightsCases.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch = !search || item.title.toLowerCase().includes(search) || item.description.toLowerCase().includes(search) || item.category.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  return (
    <Section>
      <Container>
        <SectionHeader eyebrow="Case Files" title="Human Rights Case Archive" description="Search documented cases by subject or keyword." />
        <div className="human-rights-search"><Search size={19} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search case files..." aria-label="Search human rights cases" /></div>
        <div className="human-rights-category-tabs">
          {humanRightsCategories.map((item) => (
            <button type="button" key={item} className={item === category ? "human-rights-category-tab human-rights-category-tab--active" : "human-rights-category-tab"} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
        {filteredCases.length > 0 ? (
          <div className="human-rights-case-grid">
            {filteredCases.map((item) => (
              <Link to={`/human-rights/${item.id}`} className="human-rights-case-card" key={item.id}>
                <div className="human-rights-case-card__top"><Badge>{item.category}</Badge><span>{item.status}</span></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="human-rights-case-card__footer"><span><CalendarDays size={14} />{item.date}</span><strong>View case <ArrowRight size={15} /></strong></div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="human-rights-empty"><strong>No case files found</strong><p>Try another search term or category.</p></div>
        )}
      </Container>
    </Section>
  );
}

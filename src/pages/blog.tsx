import { Helmet } from 'react-helmet-async';
import { ExternalLink } from 'lucide-react';
import Appearable from '../components/appearable';
import './blog.css';

const ecommerceSeries = {
  summary: 'Series on e-commerce search our CTO Honza Král did together with Elastic',
  posts: [
    { title: 'Why ecommerce search needs governance',                                  date: 'Apr 9, 2026',  url: 'https://www.elastic.co/search-labs/blog/ecommerce-search-governance-improve-retrieval' },
    { title: 'Accelerating merchandising improvements with a governed control plane',  date: 'Apr 28, 2026', url: 'https://www.elastic.co/search-labs/blog/ecommerce-search-governance-zero-deploy' },
    { title: 'Building a control plane to govern ecommerce search',                    date: 'May 1, 2026',  url: 'https://www.elastic.co/search-labs/blog/ecommerce-search-governance-control-plane-architecture' },
    { title: 'Elasticsearch percolator for ecommerce search governance',               date: 'May 4, 2026',  url: 'https://www.elastic.co/search-labs/blog/elasticsearch-percolator-search-governance' },
    { title: 'Multi-tier search with Elastic for ecommerce search governance',         date: 'May 6, 2026',  url: 'https://www.elastic.co/search-labs/blog/multi-tier-search-ecommerce-governance' },
    { title: 'Personalizing ecommerce search',                                         date: 'May 11, 2026', url: 'https://www.elastic.co/search-labs/blog/elasticsearch-personalized-search-governed-ecommerce' },
    { title: 'Ecommerce search optimization using margin and popularity boosting',     date: 'May 13, 2026', url: 'https://www.elastic.co/search-labs/blog/ecommerce-search-optimization-query-governed' },
    { title: 'Agentic AI search with deterministic guardrails',                        date: 'May 18, 2026', url: 'https://www.elastic.co/search-labs/blog/agentic-ai-search-deterministic-guardrail-query-execution' },
  ],
};

const standalonePost = {
  title: 'Searching for meaning',
  summary: 'An interactive notebook exploring semantic search and machine learning through the lens of language theory, grounded in Elasticsearch.',
  author: 'Karel Minařík',
  date: 'Jul 2023',
  url: 'https://nb.karmi.cz/semantic-search-with-elasticsearch/',
};

const talks = [
  { id: 'U8whfTS3G8U', title: 'RuPy 2012: Ruby and Elasticsearch',                              date: '2012',              venue: 'RuPy Conference' },
  { id: 'pQi4J3xeN2s', title: 'Cloud services beyond infrastructure and OpenStack',             date: '~2015',             venue: 'STX Next' },
  { id: 'XoZDdwz43uQ', title: 'Lessons learned from building Elasticsearch client',            date: 'Jul 2014',          venue: 'EuroPython' },
  { id: 'RAJiFK1bHO0', title: 'Beyond the basics with Elasticsearch',                           date: 'Sep 2015',          venue: 'DjangoCon US' },
  { id: '6XONxxHxxms', title: 'Inheriting code… and I don\'t mean classes',                     date: '2019',              venue: 'PyCon Africa' },
  { id: 'l3mSf0GVhzA', title: 'The Library and the Maze',                                       date: 'Sep 2023',          venue: 'PyCon CZ' },
  { id: 'aREksQ46OnI', title: 'Elastic Observability: The Good, The Bad & The Ugly',            date: 'Mar 2024',          venue: 'Elastic Community' },
  { id: 'u-ivLEDC_74', title: 'Semantic Search With Elasticsearch',                             date: 'Mar 2024',          venue: 'Elastic' },
];

export default function Blog() {
  return (
    <Appearable>
      <Helmet>
        <title>Blog & Talks | Sidecar</title>
        <meta name="description" content="Writing and conference talks from the Sidecar team — covering Elasticsearch, semantic search, e-commerce search, and observability." />
        <meta property="og:title" content="Blog & Talks | Sidecar" />
        <meta property="og:description" content="Writing and conference talks from the Sidecar team on Elasticsearch, semantic search, and e-commerce." />
        <meta property="og:url" content="https://sidecar.software/#/blog" />
      </Helmet>

      <div className="blog_header">
        <h2>Blog &amp; Talks</h2>
        <p>Writing and conference talks from the Sidecar team</p>
      </div>

      <section className="blog_section">
        <h3 className="section_title">Writing</h3>

        <div className="series_card">
          <div className="series_meta">
            <span className="series_badge">Series</span>
            <p className="series_summary">{ecommerceSeries.summary}</p>
          </div>
          <ol className="series_posts">
            {ecommerceSeries.posts.map((post) => (
              <li key={post.url}>
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="series_post_link">
                  <span className="post_title">{post.title}</span>
                  <span className="post_date">{post.date}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        <a href={standalonePost.url} target="_blank" rel="noopener noreferrer" className="standalone_card">
          <div className="standalone_content">
            <div className="standalone_top">
              <h4>{standalonePost.title}</h4>
              <ExternalLink size={16} className="standalone_icon" />
            </div>
            <p className="standalone_summary">{standalonePost.summary}</p>
            <div className="standalone_footer">
              <span className="standalone_author">{standalonePost.author}</span>
              <span className="standalone_date">{standalonePost.date}</span>
            </div>
          </div>
        </a>
      </section>

      <section className="talks_section">
        <h3 className="section_title">Talks</h3>
        <div className="talks_grid">
          {talks.map((talk) => (
            <div key={talk.id} className="talk_card">
              <div className="talk_embed">
                <iframe
                  src={`https://www.youtube.com/embed/${talk.id}`}
                  title={talk.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="talk_info">
                <p className="talk_title">{talk.title}</p>
                <div className="talk_meta">
                  <span className="talk_venue">{talk.venue}</span>
                  <span className="talk_date">{talk.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Appearable>
  );
}

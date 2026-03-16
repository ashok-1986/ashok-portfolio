'use client';

import { EXPERTISE } from '@/lib/constants';

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="exp-header">
        <h2 className="sec-title rev">
          Expe<em>rtise</em>
        </h2>
        <p className="exp-desc rev">
          Three pillars of digital analytics transformation
        </p>
      </div>

      <div className="cards-grid">
        {EXPERTISE.map((item, index) => (
          <div key={index} className={`card rev d${index}`}>
            <div className="card-num">{item.num}</div>
            <div className="card-label">{item.label}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-body">{item.body}</p>
            <div className="tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

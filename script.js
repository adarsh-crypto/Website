/* ==== Experience Cards Polishing (overrides) ==== */
.experience-details-container .about-containers {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
}

.experience-details-container .details-container {
  flex: 1 1 280px;           /* allow wrapping, target width ~280px */
  min-width: 260px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: stretch;      /* titles + bullets fill horizontally */
  text-align: left;          /* left-align content inside the card */
  padding: 2rem;
  margin: 0;                 /* gap handled by parent container */
  background: #fff;
  border: 1px solid #E5E7EB; /* light gray */
  border-radius: 1.25rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}

/* Role/company heading */
.experience-details-container .details-container .experience-sub-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.4;
  margin: 0 0 1rem 0;
}

/* Bullet list container */
.experience-details-container .details-container .article-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Individual bullet rows */
.experience-details-container .details-container .article-container article {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin: 0;                 /* reset previous margins */
  width: 100%;               /* override earlier fixed width */
}

.experience-details-container .details-container .article-container article .icon {
  height: 1.25rem;
  width: 1.25rem;
  flex: 0 0 1.25rem;
  margin-top: 0.2rem;        /* align with heading text */
}

.experience-details-container .details-container .article-container article h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: #111827;
}

.experience-details-container .details-container .article-container article p {
  font-size: 0.9rem;
  margin: 0;
  color: #4B5563;            /* neutral-600 */
}

/* Responsive tweaks */
@media (max-width: 1024px) {
  .experience-details-container .details-container {
    flex: 1 1 320px;
  }
}
@media (max-width: 640px) {
  section {
    margin: 0 1.5rem;
  }
  .experience-details-container .details-container {
    padding: 1.5rem;
    min-width: 100%;
    max-width: 100%;
  }
}

-- Every contact-form submission, saved before any email is attempted so a lead
-- is never lost to a mail failure.
CREATE TABLE leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  heard_from TEXT,          -- "How did you hear about us?" (their words)
  landing TEXT,             -- first page of the visit, with any utm_ params
  referrer TEXT,            -- document.referrer on that first page
  page TEXT,                -- page the form was submitted from
  ip_hash TEXT,             -- salted hash, only for rate limiting
  emailed INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX leads_ip_time ON leads (ip_hash, created_at);

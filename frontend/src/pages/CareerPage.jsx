/*
CareerPage.jsx
React component (default export) for a Careers page with:
- Add / Delete job postings (stored in localStorage by default)
- Company logo displayed in header (fixed public path usage)
- Simple form validation
- Optional placeholder to connect to a backend API for persistent storage
- Embedded Chat Bot area
*/

import React, { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "maghraut_jobs_v1";
const CHAT_WIDGET_URL = null;

function useLocalJobs() {
  const [jobs, setJobs] = useState(() => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Failed to load jobs from localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jobs));
    } catch (e) {
      console.error("Failed to save jobs to localStorage", e);
    }
  }, [jobs]);

  return [jobs, setJobs];
}

export default function CareerPage() {
  const [jobs, setJobs] = useLocalJobs();
  const [form, setForm] = useState({
    title: "",
    location: "",
    type: "Full-time",
    description: "",
    applyLink: "",
  });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const addJob = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.title.trim() || !form.description.trim()) {
      setError("Please provide at least a title and description.");
      return;
    }

    setSaving(true);
    try {
      const newJob = {
        id: Date.now().toString(),
        ...form,
        postedAt: new Date().toISOString(),
      };

      setJobs((prev) => [newJob, ...prev]);
      setForm({ title: "", location: "", type: "Full-time", description: "", applyLink: "" });
    } catch (err) {
      console.error(err);
      setError("Failed to add job. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  const deleteJob = async (id) => {
    if (!window.confirm("Delete this job posting?")) return;

    try {
      setJobs((prev) => prev.filter((j) => j.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete job.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex items-center justify-between bg-white rounded-2xl p-4 shadow-md">
          <div className="flex items-center gap-4">
            {/* Use public folder path for logo */}
            <img src="/maghraut-logo.png" alt="Maghraut Technologies" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">Careers at Maghraut</h1>
              <p className="text-gray-600">Join our colorful journey of innovation.</p>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job posting form */}
          <section className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">Post a Job</h2>
            <form onSubmit={addJob} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="mt-1 block w-full border rounded-lg p-2 focus:ring focus:ring-indigo-400"
                  placeholder="e.g. Frontend Engineer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="mt-1 block w-full border rounded-lg p-2 focus:ring focus:ring-purple-400"
                  placeholder="e.g. Bhopal, Hybrid"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="mt-1 block w-full border rounded-lg p-2 focus:ring focus:ring-pink-400"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                  <option>Contract</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={5}
                  className="mt-1 block w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
                  placeholder="Responsibilities, qualifications, skills..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Apply Link (optional)</label>
                <input
                  value={form.applyLink}
                  onChange={(e) => setForm({ ...form, applyLink: e.target.value })}
                  className="mt-1 block w-full border rounded-lg p-2 focus:ring focus:ring-purple-300"
                  placeholder="https:// or mailto:"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-sm hover:opacity-90 disabled:opacity-60"
                >
                  {saving ? "Posting..." : "Post Job"}
                </button>

                <button
                  type="button"
                  onClick={() => setForm({ title: "", location: "", type: "Full-time", description: "", applyLink: "" })}
                  className="px-3 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Reset
                </button>
              </div>
            </form>
          </section>

          {/* Job list */}
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-purple-600">Open Positions ({jobs.length})</h2>
              </div>

              {jobs.length === 0 ? (
                <div className="text-gray-500">No job postings yet — post one from the left.</div>
              ) : (
                <ul className="space-y-4">
                  {jobs.map((job) => (
                    <li key={job.id} className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
                      <div>
                        <h3 className="text-lg font-semibold text-indigo-700">{job.title}</h3>
                        <div className="text-sm text-gray-600">{job.location || "Remote / Not specified"} • {job.type}</div>
                        <p className="mt-2 text-gray-700 whitespace-pre-wrap">{job.description}</p>
                        {job.applyLink && (
                          <a href={job.applyLink} target="_blank" rel="noreferrer" className="inline-block mt-2 text-sm font-medium underline text-purple-600">
                            Apply link
                          </a>
                        )}
                      </div>

                      <div className="flex-shrink-0 flex flex-col items-end gap-2">
                        <div className="text-xs text-gray-500">Posted: {new Date(job.postedAt).toLocaleString()}</div>
                        <button
                          onClick={() => deleteJob(job.id)}
                          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Chat Section */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-pink-600">Recruiter Chat</h2>
              {CHAT_WIDGET_URL ? (
                <div className="w-full h-96 border rounded-lg overflow-hidden">
                  <iframe title="Chat Widget" src={CHAT_WIDGET_URL} className="w-full h-full" />
                </div>
              ) : (
                <BuiltInChat />)
              }
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function BuiltInChat() {
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Hi! I'm the recruiter bot. Ask me about open roles, interview process or how to apply." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), from: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });

      if (!res.ok) {
        setMessages((m) => [...m, { id: Date.now() + 1, from: "bot", text: "Sorry, I'm having trouble reaching the chat service right now." }]);
      } else {
        const data = await res.json();
        setMessages((m) => [...m, { id: Date.now() + 1, from: "bot", text: data.reply || "(no reply)" }]);
      }
    } catch (err) {
      console.error(err);
      setMessages((m) => [...m, { id: Date.now() + 1, from: "bot", text: "An error occurred while contacting the chat service." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 h-96 flex flex-col">
      <div className="flex-1 overflow-auto space-y-3 mb-3">
        {messages.map((m) => (
          <div key={m.id} className={m.from === "bot" ? "text-left" : "text-right"}>
            <div className={`inline-block px-3 py-2 rounded-lg max-w-[80%] ${m.from === "bot" ? "bg-gray-100" : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          placeholder="Ask about a role..."
          className="flex-1 border rounded-lg p-2 focus:ring focus:ring-indigo-300"
        />
        <button onClick={send} disabled={loading} className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg">
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}

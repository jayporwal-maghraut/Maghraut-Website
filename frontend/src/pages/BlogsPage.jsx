import React, { useState } from 'react';

export default function CombinedThreePages() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="text-xl font-semibold">Maghraut Technologies Blog</h1>
          <nav className="flex gap-2">
            <button onClick={() => setActive(0)} className={`px-3 py-1 rounded-md ${active === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Blog</button>
            <button onClick={() => setActive(1)} className={`px-3 py-1 rounded-md ${active === 1 ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Post</button>
            <button onClick={() => setActive(2)} className={`px-3 py-1 rounded-md ${active === 2 ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Privacy</button>
          </nav>
        </header>

        <main className="p-6 space-y-6">
          {/* Blog index.html */}
          {active === 0 && (
            <section>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <article className="bg-white/90 p-4 rounded-xl shadow hover:shadow-lg transition">
                    <img src="https://via.placeholder.com/900x300.png?text=Featured+Image+1" alt="Post 1" className="rounded-md" />
                    <h2 className="text-xl font-semibold mt-3">How to build a fast static blog</h2>
                    <p className="text-sm text-gray-500">By Admin — Sept 23, 2025</p>
                    <p className="mt-2 text-gray-700">A concise guide to create a fast and responsive static blog using plain HTML and CSS. Learn best practices for layout, images and performance.</p>
                    <button onClick={() => setActive(1)} className="mt-3 inline-block px-3 py-1 bg-blue-600 text-white rounded">Read more →</button>
                  </article>

                  <article className="bg-white/90 p-4 rounded-xl shadow hover:shadow-lg transition">
                    <img src="https://via.placeholder.com/900x300.png?text=Featured+Image+2" alt="Post 2" className="rounded-md" />
                    <h2 className="text-xl font-semibold mt-3">Design tips for readable blog posts</h2>
                    <p className="text-sm text-gray-500">By Admin — Sept 20, 2025</p>
                    <p className="mt-2 text-gray-700">Small typography and spacing tweaks can dramatically improve readability. We'll show practical examples you can copy.</p>
                    <button onClick={() => setActive(1)} className="mt-3 inline-block px-3 py-1 bg-blue-600 text-white rounded">Read more →</button>
                  </article>
                </div>

                <aside className="bg-white/90 p-4 rounded-xl shadow h-fit">
                  <h3 className="font-semibold">Search</h3>
                  <input placeholder="Search posts..." className="w-full border border-gray-300 rounded px-2 py-1 mb-4" />

                  <h3 className="font-semibold">Categories</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Web Development</li>
                    <li>Design</li>
                    <li>Performance</li>
                  </ul>

                  <h3 className="mt-4 font-semibold">About</h3>
                  <p className="text-sm text-gray-500">Short bio or site description – keep it one or two lines for a clean sidebar.</p>
                </aside>
              </div>
            </section>
          )}

          {/* Post page (post.html) */}
          {active === 1 && (
            <section className="max-w-3xl mx-auto space-y-6">
              <article className="bg-white p-6 rounded-xl shadow">
                <img src="https://via.placeholder.com/900x350.png?text=Post+Banner" alt="Blog Banner" className="rounded-md" />
                <h1 className="text-2xl font-bold mt-4">How to build a fast static blog</h1>
                <p className="text-sm text-gray-500">By Admin — Sept 23, 2025</p>
                <div className="mt-4 space-y-3 text-gray-700">
                  <p>This is the full blog post content. Paste your article text here. Use paragraphs, lists, code blocks, images, etc.</p>
                  <h3 className="text-lg font-semibold">Quick tips</h3>
                  <ul className="list-disc pl-5">
                    <li>Optimize featured images (compress, correct dimensions).</li>
                    <li>Keep paragraphs short — 2–3 sentences each.</li>
                    <li>Use semantic tags & headings for SEO & accessibility.</li>
                  </ul>

                  <h3 className="text-lg font-semibold">Our Latest LinkedIn Update</h3>
                  <div className="rounded-md overflow-hidden shadow">
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7366093416570494976" title="Embedded LinkedIn Post" allowFullScreen className="w-full h-[400px] border-none"></iframe>
                  </div>

                  <button onClick={() => setActive(0)} className="mt-4 inline-block px-3 py-1 bg-blue-600 text-white rounded">← Back to Blog</button>
                </div>
              </article>

              <footer className="bg-gray-900 text-white p-6 rounded-xl grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold border-b border-white/30 pb-1 mb-2">Our Office</h4>
                  <p><strong>Maghraut Technologies Private Limited</strong><br />Bhukhan, No-6/D-765, Sector 6, Gomti Nagar,<br />Lucknow, Uttar Pradesh, India, 226010</p>
                  <p>Email: <a href="mailto:info@maghraut.com" className="text-blue-300">info@maghraut.com</a><br />Phone: <a href="tel:+917991989898" className="text-blue-300">+91 7991989898</a></p>
                </div>

                <div>
                  <h4 className="font-semibold border-b border-white/30 pb-1 mb-2">Connect with Us</h4>
                  <div className="flex gap-2">
                    <a href="https://www.linkedin.com/company/maghraut/posts/?feedView=all" target="_blank" rel="noreferrer" className="bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center">in</a>
                    <a href="https://x.com/maghraut" target="_blank" rel="noreferrer" className="bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center">X</a>
                    <a href="https://www.facebook.com/maghraut" target="_blank" rel="noreferrer" className="bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center">f</a>
                    <a href="https://www.instagram.com/maghraut/#" target="_blank" rel="noreferrer" className="bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center">IG</a>
                    <a href="https://www.youtube.com/@maghraut" target="_blank" rel="noreferrer" className="bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center">▶</a>
                  </div>
                  <div className="bg-white text-gray-800 rounded-lg p-3 mt-4 text-center shadow">
                    <h4 className="font-semibold">Reviewed on</h4>
                    <div className="text-yellow-400 text-lg">★★★★★</div>
                    <p>Clutch.co</p>
                    <a href="https://clutch.co/profile/maghraut-technologies" target="_blank" rel="noreferrer" className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white rounded">Review Us</a>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold border-b border-white/30 pb-1 mb-2">Find Us</h4>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.548043927797!2d81.01239477530103!3d26.824806876690827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2e306f6f7c1%3A0x5c5d9a1b3d6e5c54!2sMaghraut%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1695483812345!5m2!1sen!2sin" allowFullScreen loading="lazy" className="w-full h-40 rounded"></iframe>
                  <a href="privacy.html" onClick={() => setActive(2)} className="text-blue-300 text-sm mt-2 block">Privacy Policy — Learn more !</a>
                </div>
              </footer>
              <p className="text-xs text-gray-500 text-center">© 2025 Maghraut. All rights reserved</p>
            </section>
          )}

          {/* Privacy page (privacy.html) */}
          {active === 2 && (
            <section className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow space-y-4">
              <h1 className="text-2xl font-bold text-blue-700">Privacy Policy – Maghraut Technologies Private Limited</h1>
              <p><strong>Updated on:</strong> June 28th, 2025</p>

              <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
              <p>At Maghraut Technologies Private Limited ("we," "our," or "us"), your privacy is important to us...</p>

              <h2 className="text-xl font-semibold mt-4">2. Information We Collect</h2>
              <ul className="list-disc pl-5">
                <li>Name, email address, phone number</li>
                <li>Business information</li>
                <li>Information submitted during LinkedIn OAuth consent</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">8. Your Rights</h2>
              <ul className="list-disc pl-5">
                <li>Access, correct, or delete your data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw LinkedIn OAuth permissions</li>
              </ul>

              <p>Contact: <a href="mailto:contact@maghraut.com" className="text-blue-600">contact@maghraut.com</a></p>

              <footer className="text-sm text-gray-500 text-center border-t pt-4">© 2025 Maghraut. All rights reserved</footer>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

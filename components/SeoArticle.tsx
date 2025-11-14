
import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mt-16 max-w-4xl mx-auto">
            <div className={`relative transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[10000px]' : 'max-h-[260px]'}`}>
                <article id="article" className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/30 rounded-lg p-6 md:p-10 text-slate-300 prose prose-invert prose-lg prose-headings:text-cyan-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white prose-table:border-slate-700 prose-th:border-slate-600 prose-td:border-slate-700">
                    <header>
                        <h2 className="text-4xl font-extrabold text-white !mb-4">The Ultimate Guide to Broken Link Management and SEO Health</h2>
                        <p className="text-slate-400">Mastering HTTP Status Codes to Boost User Experience and Search Rankings</p>
                    </header>
                    <p>In the vast, interconnected ecosystem of the internet, links are the pathways that guide both users and search engine crawlers through a web of information. A healthy, well-maintained website is like a bustling city with a flawless road network, allowing traffic to flow smoothly... This comprehensive guide will illuminate the critical importance of link management, demystify the language of HTTP status codes, and provide a strategic framework for identifying, fixing, and preventing broken links to ensure your website achieves its maximum potential.</p>

                    {isExpanded && (
                        <>
                            <nav className="my-8 p-6 bg-slate-800/50 border border-slate-700 rounded-md">
                                <h3 className="text-xl font-bold !mt-0 !mb-4 text-white">Table of Contents</h3>
                                <ul className="list-disc space-y-2 pl-5">
                                    <li><a href="#introduction">Introduction: The Silent Sabotage of Broken Links</a></li>
                                    <li><a href="#what-are-http-status-codes">What Are HTTP Status Codes? A Digital Conversation</a></li>
                                    <li><a href="#the-good-the-bad-the-redirect">The Good, The Bad, and The Redirect: Key Status Codes Explained</a></li>
                                    <li><a href="#why-broken-links-destroy-seo">Why Broken Links (404s) Are SEO Kryptonite</a></li>
                                    <li><a href="#detecting-broken-links">The Necessity of Server-Side Checking</a></li>
                                    <li><a href="#fixing-broken-links">A Strategic Approach to Fixing Broken Links</a></li>
                                    <li><a href="#preventative-maintenance">Preventative Maintenance</a></li>
                                    <li><a href="#conclusion">Conclusion: Link Health as a Cornerstone of SEO</a></li>
                                    <li><a href="#faq">Frequently Asked Questions (FAQ)</a></li>
                                </ul>
                            </nav>

                            <section id="introduction">
                                <h3>Introduction: The Silent Sabotage of Broken Links</h3>
                                <p>In the vast, interconnected ecosystem of the internet, links are the pathways that guide both users and search engine crawlers through a web of information. A healthy, well-maintained website is like a bustling city with a flawless road network, allowing traffic to flow smoothly from one destination to another. Conversely, a site riddled with broken links is akin to a city full of dead-ends, collapsed bridges, and misleading road signs. These digital roadblocks, known technically as 404 errors, do more than just frustrate users; they actively sabotage your website's Search Engine Optimization (SEO) efforts, rendering your content less visible and diminishing your site's authority.</p>
                                <p>Many website owners underestimate the corrosive effect of link rot. A single broken link might seem trivial, but as a site grows and content evolves, these errors multiply. They can originate from deleted pages, typos in URLs, or changes in the site structure of external websites you link to. Each broken link is a breach in user trust and a signal of neglect to search engines like Google. This comprehensive guide will illuminate the critical importance of link management, demystify the language of HTTP status codes, and provide a strategic framework for identifying, fixing, and preventing broken links to ensure your website achieves its maximum potential in both user experience and search engine rankings.</p>
                            </section>

                            <section id="what-are-http-status-codes">
                                <h3>What Are HTTP Status Codes? A Digital Conversation</h3>
                                <p>Every time you click a link or type a URL into your browser, a complex but instantaneous conversation happens behind the scenes. Your browser (the client) sends a request to the website's server, asking for a specific resource, like a webpage, image, or file. The server processes this request and sends back a response. A crucial part of this response is a three-digit number called an HTTP status code.</p>
                                <p>Think of these codes as a short, standardized message from the server, indicating the outcome of the request. They are categorized into five classes, each representing a different type of response:</p>
                                <ul>
                                    <li><strong>1xx (Informational):</strong> The request was received, and the process is continuing.</li>
                                    <li><strong>2xx (Success):</strong> The request was successfully received, understood, and accepted.</li>
                                    <li><strong>3xx (Redirection):</strong> Further action needs to be taken by the client to complete the request.</li>
                                    <li><strong>4xx (Client Error):</strong> The request contains bad syntax or cannot be fulfilled.</li>
                                    <li><strong>5xx (Server Error):</strong> The server failed to fulfill a valid request.</li>
                                </ul>
                            </section>

                            <section id="the-good-the-bad-the-redirect">
                                <h3>The Good, The Bad, and The Redirect: Key Status Codes Explained</h3>
                                <div className="overflow-x-auto my-8">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Status Code</th>
                                                <th>Meaning</th>
                                                <th>Category</th>
                                                <th>SEO Impact</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>200 OK</strong></td>
                                                <td>The request succeeded. The page was found and delivered.</td>
                                                <td>Success</td>
                                                <td><strong>Positive.</strong> The desired outcome.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>301 Moved Permanently</strong></td>
                                                <td>The resource has been permanently moved to a new URL.</td>
                                                <td>Redirection</td>
                                                <td><strong>Crucial & Positive.</strong> Passes link equity to the new URL.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>302 Found</strong></td>
                                                <td>The resource is temporarily at a different URL.</td>
                                                <td>Redirection</td>
                                                <td><strong>Neutral/Negative.</strong> Does not pass link equity.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>404 Not Found</strong></td>
                                                <td>The server cannot find the requested resource. The link is broken.</td>
                                                <td>Client Error</td>
                                                <td><strong>Highly Negative.</strong> Wastes crawl budget and loses link equity.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>500 Internal Server Error</strong></td>
                                                <td>Something went wrong on the website's server.</td>
                                                <td>Server Error</td>
                                                <td><strong>Very Negative.</strong> Prevents access and can lead to de-indexing.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            
                            <section id="why-broken-links-destroy-seo">
                                <h3>Why Broken Links (404s) Are SEO Kryptonite</h3>
                                <p>Broken links inflict damage by degrading user experience, wasting crawl budget, diluting link equity from backlinks, and sending negative quality signals to search engines.</p>
                            </section>

                            <section id="detecting-broken-links">
                                <h3>The Necessity of Server-Side Checking</h3>
                                <p>Client-side (in-browser) checks are often blocked by security policies (CORS). A server-side check, like the one this tool uses, makes a direct request to the target URL, retrieving the true HTTP status code accurately and reliably.</p>
                            </section>
                            
                            <section id="fixing-broken-links">
                                <h3>A Strategic Approach to Fixing Broken Links</h3>
                                <p>To fix broken links, you should analyze the link for typos, find a relevant replacement page, and implement 301 redirects for permanently moved content to preserve SEO value. If no replacement exists, remove the link.</p>
                            </section>

                            <section id="preventative-maintenance">
                                <h3>Preventative Maintenance</h3>
                                <p>Prevent broken links by establishing a redirect policy for any changed URLs, performing regular site crawls with a link checker, and creating a helpful custom 404 page to guide lost users.</p>
                            </section>
                            
                            <section id="conclusion">
                                <h3>Conclusion: Link Health as a Cornerstone of SEO</h3>
                                <p>Link management is an ongoing commitment. By understanding HTTP status codes and regularly auditing your site with server-side tools, you create a better user experience, preserve link equity, and achieve higher search rankings.</p>
                            </section>

                            <section id="faq">
                                <h3 className="text-3xl font-bold text-white mt-16">Frequently Asked Questions (FAQ)</h3>
                                <div className="space-y-6 mt-6">
                                    <div>
                                        <h4 className="font-semibold text-cyan-400">Why are broken links bad for SEO?</h4>
                                        <p>Broken links (404 errors) are detrimental to SEO because they create a poor user experience, stop search engine crawlers from indexing your site effectively, and dilute "link equity" that would otherwise be passed between pages.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-cyan-400">What is the difference between a 301 and a 302 redirect?</h4>
                                        <p>A 301 redirect is permanent and transfers link equity. A 302 redirect is temporary and does not, making it less ideal for SEO when content has moved for good.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-cyan-400">How can I check for broken links on my website?</h4>
                                        <p>You can use this tool for single URLs or comprehensive crawlers like Screaming Frog, Ahrefs, or Google Search Console for a full-site audit.</p>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}
                </article>
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900/50 via-slate-900/40 to-transparent pointer-events-none"></div>
                )}
            </div>
            <div className="text-center mt-4">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-cyan-400 hover:text-white font-semibold transition-colors duration-300 py-2 px-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700"
                >
                    {isExpanded ? 'Read Less' : 'Read Full Guide...'}
                </button>
            </div>
        </div>
    );
};

export default SeoArticle;

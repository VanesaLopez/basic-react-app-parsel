# basic-react-app-parcel

Basic parcel application with React, typescript, images responsive loader.

The application has configuration for development and production environments and bundle analyzer.

 # Prerequisites
  
  Install <a href="https://nodejs.org/en/">Node.js and npm</a> (v10.15.3 or higher) if they are not already installed on your computer.
  <blockquote>
<p>Verify that you are running at least node v10.x.x and npm 6.x.x by running <code>node -v</code> and <code>npm -v</code> in a terminal/console window. Older versions may produce errors.</p>
</blockquote>

# Steps to build it

 + Execute npm run start in order to get dev environment
 
 <div class="highlight highlight-source-shell"><pre>npm run start:dev</pre></div>
 
 + Execute npm run build in order to get dev bundle
 
 <div class="highlight highlight-source-shell"><pre>npm run build:dev</pre></div>
 
 + Execute npm run build:prod in order to get production bundle
 
 <div class="highlight highlight-source-shell"><pre>npm run build:prod</pre></div>
 
 When NODE_ENV is 'production' a bundle report will be saved to <output directory>/report.html

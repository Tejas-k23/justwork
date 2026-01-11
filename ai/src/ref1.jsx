<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PixelTouch – AI Magic Image Editor</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
      color: #000;
      background: linear-gradient(180deg, #ffffff 0%, #F0EBFF 100%);
    }
    img { max-width: 100%; display: block; }
    a { text-decoration: none; color: inherit; }

    /* NAVBAR */
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 60px;
    }
    .nav-center { display: flex; gap: 32px; font-weight: 500; }
    .logo { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 22px; }
    .star { width: 22px; height: 22px; background: #0066FF; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); }
    .btn-outline {
      border: 2px solid #0066FF;
      padding: 12px 24px;
      border-radius: 999px;
      color: #0066FF;
      font-weight: 600;
    }

    /* HERO */
    .hero {
      display: grid;
      grid-template-columns: 60% 40%;
      align-items: center;
      padding: 80px 60px;
      gap: 40px;
    }
    .hero h1 { font-size: 80px; font-weight: 900; line-height: 1.05; }
    .hero p { font-size: 22px; color: #666; margin: 24px 0 40px; max-width: 640px; }
    .btn-primary {
      background: #0066FF;
      color: #fff;
      padding: 16px 32px;
      border-radius: 999px;
      font-size: 18px;
      font-weight: 600;
      display: inline-block;
    }
    .social-proof { display: flex; align-items: center; gap: 16px; margin-top: 32px; }
    .avatars { display: flex; }
    .avatars img {
      width: 36px; height: 36px; border-radius: 50%; border: 2px solid #fff; margin-left: -10px;
    }

    .phone-mockup {
      box-shadow: 0 20px 60px rgba(0,0,0,0.25);
      border-radius: 40px;
      overflow: hidden;
    }

    /* MISSION */
    .mission {
      background: #FAFAFA;
      padding: 80px 40px;
      text-align: center;
    }
    .mission p {
      max-width: 900px;
      margin: auto;
      font-size: 26px;
      line-height: 1.7;
      color: #666;
    }
    .mission .highlight { color: #0066FF; font-weight: 600; }
    .stats {
      display: flex;
      justify-content: center;
      gap: 80px;
      margin-top: 80px;
      flex-wrap: wrap;
    }
    .stat h3 { font-size: 52px; font-weight: 800; }
    .stat span { color: #666; font-size: 18px; }

    .section-heading {
      font-size: 72px;
      font-weight: 900;
      text-align: center;
      margin-top: 120px;
    }

    /* FEATURES */
    .features {
      background: #fff;
      padding: 80px 40px;
    }
    .feature-grid {
      max-width: 1300px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
    .feature-card {
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 2px 20px rgba(0,0,0,0.08);
      transition: all 0.3s ease;
      background: #F8F9FB;
    }
    .feature-card:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(0,0,0,0.12); }
    .feature-content { padding: 40px; }
    .icon {
      width: 48px; height: 48px; border-radius: 12px; background: #fff;
      display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
      color: #0066FF; font-weight: 900;
    }
    .feature-content h3 { font-size: 34px; margin-bottom: 16px; }
    .feature-content p { color: #666; font-size: 18px; line-height: 1.6; }
    .feature-image { height: 450px; background-size: cover; background-position: center; }

    /* BEFORE AFTER */
    .compare {
      background: #fff;
      padding: 80px 40px;
      text-align: center;
    }
    .compare h2 { font-size: 72px; font-weight: 900; margin-bottom: 60px; }
    .slider {
      position: relative;
      max-width: 1100px;
      height: 650px;
      margin: auto;
      border-radius: 32px;
      overflow: hidden;
      box-shadow: 0 4px 40px rgba(0,0,0,0.15);
    }
    .slider img { position: absolute; top: 0; left: 0; height: 100%; width: 100%; object-fit: cover; }
    .after { clip-path: inset(0 0 0 50%); }
    .handle {
      position: absolute; top: 0; left: 50%; width: 0; height: 100%;
    }
    .handle:before {
      content: '';
      position: absolute; top: 50%; left: -30px;
      width: 60px; height: 60px; border-radius: 50%;
      background: #fff; border: 2px solid #fff;
      transform: translateY(-50%);
      box-shadow: 0 2px 12px rgba(0,0,0,0.2);
    }

    /* CATEGORY */
    .categories {
      background: #F5F7FA;
      padding: 80px 40px;
    }
    .cat-grid {
      max-width: 1200px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .cat {
      background: #fff;
      border-radius: 24px;
      box-shadow: 0 2px 16px rgba(0,0,0,0.08);
      transition: all 0.3s ease;
      cursor: pointer;
    }
    .cat:hover { transform: translateY(-8px); }
    .cat img { border-radius: 20px; height: 200px; width: 100%; object-fit: cover; }
    .cat h4 { text-align: center; padding: 20px; font-size: 22px; font-weight: 600; }

    /* FOOTER BADGE */
    .framer {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #000;
      color: #fff;
      padding: 8px 14px;
      border-radius: 999px;
      font-size: 12px;
    }

    @media (max-width: 900px) {
      .hero { grid-template-columns: 1fr; }
      .feature-grid, .cat-grid { grid-template-columns: 1fr; }
      .stats { gap: 40px; }
      .hero h1 { font-size: 56px; }
    }
  </style>
</head>
<body>

  <nav class="navbar">
    <div class="logo"><div class="star"></div>PixelTouch</div>
    <div class="nav-center">
      <a>Home</a><a>About</a><a>Features</a><a>Pricing</a><a>Blog</a>
    </div>
    <a class="btn-outline">Download Now</a>
  </nav>

  <section class="hero">
    <div>
      <h1>AI Magic Image Editor</h1>
      <p>Effortless AI Photo Editing to Enhance, Retouch, and Transform Instantly.</p>
      <a class="btn-primary">Try it for Free</a>
      <div class="social-proof">
        <div class="avatars">
          <img src="https://i.pravatar.cc/40?1" />
          <img src="https://i.pravatar.cc/40?2" />
          <img src="https://i.pravatar.cc/40?3" />
        </div>
        <span>100k+ Downloads</span>
      </div>
    </div>
    <div class="phone-mockup">
      <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" />
    </div>
  </section>

  <section class="mission">
    <p>We're on a mission to make stunning <span class="highlight">photo edits</span> accessible to everyone — whether you're a casual snapper or a content creator. With <span class="highlight">AI-driven</span> tools and a user-first design, PixelTouch helps you express your vision beautifully and effortlessly.</p>
    <div class="stats">
      <div class="stat"><h3>+10 Million</h3><span>Photos edited globally</span></div>
      <div class="stat"><h3>86%</h3><span>User Satisfaction</span></div>
      <div class="stat"><h3>86+</h3><span>Countries & growing</span></div>
    </div>
    <div class="section-heading">Next-level pro tools</div>
  </section>

  <section class="features">
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-content">
          <div class="icon">✨</div>
          <h3>AI Object Remover</h3>
          <p>Select and erase unwanted elements from photos with pixel-perfect background reconstruction using AI.</p>
        </div>
        <div class="feature-image" style="background-image:url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e');"></div>
      </div>
      <div class="feature-card">
        <div class="feature-content">
          <div class="icon">🎚</div>
          <h3>Style Transfer (AI Filters)</h3>
          <p>Turn any photo into artwork by applying styles from famous paintings or cinematic color tones.</p>
        </div>
        <div class="feature-image" style="background-image:url('https://images.unsplash.com/photo-1494790108377-be9c29b29330');"></div>
      </div>
    </div>
  </section>

  <section class="compare">
    <h2>AI photo enhancer</h2>
    <div class="slider">
      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" />
      <img class="after" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" />
      <div class="handle"></div>
    </div>
  </section>

  <section class="categories">
    <div class="cat-grid">
      <div class="cat"><img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"><h4 style="color:#0066FF">Portrait</h4></div>
      <div class="cat"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"><h4>Landscape</h4></div>
      <div class="cat"><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9"><h4>Old Photos</h4></div>
    </div>
  </section>

  <div class="framer">Made in Framer</div>

</body>
</html>
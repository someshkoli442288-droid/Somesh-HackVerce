<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>AI Image Generator | Somesh HackVerse V2</title>


<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/animations.css">
<link rel="stylesheet" href="../css/responsive.css">


</head>


<body>


<header class="navbar">

    <div class="logo">
        ⚡ Somesh HackVerse V2
    </div>


    <nav>

        <a href="../index.html">
            Home
        </a>


        <a href="tools.html">
            Tools
        </a>

    </nav>


</header>




<main>


<section class="hero glass ai-section">


<h1>
🎨 AI Image Generator
</h1>


<p>
Create amazing images from your ideas
</p>



<div class="ai-box">


<textarea 
id="prompt"
placeholder="Describe your image idea...">
</textarea>



<div class="ai-options">


<select id="style">

<option>
Realistic
</option>

<option>
Anime
</option>

<option>
Cyberpunk
</option>

<option>
3D
</option>

<option>
Fantasy
</option>

</select>



<select id="ratio">

<option>
1:1 Square
</option>

<option>
16:9 Landscape
</option>

<option>
9:16 Portrait
</option>

</select>


</div>




<button 
class="primary-btn"
id="generateBtn">

Generate Image

</button>


</div>




<div 
id="imageResult"
class="image-result glass">


<img 
id="generatedImage"
src=""
alt="Generated Image"
style="display:none;">



<p id="resultText">
Your generated image will appear here
</p>


</div>



</section>


</main>




<footer>

<p>
Somesh HackVerse V2 ©
</p>

</footer>



<script src="../js/ui.js"></script>

<script src="../js/image-generator.js"></script>


</body>

</html>

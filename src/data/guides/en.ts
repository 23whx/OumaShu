import type { Guide } from './types';

export const en: Record<string, Guide> = {
  'image-enhancer': {
    summary: 'AI Image Enhancer is a free browser tool that sharpens low-resolution or heavily compressed pictures with the Real-ESRGAN super-resolution model. It can keep the original size or upscale 2× or 4×, and the whole computation runs on your own device: on the GPU through WebGPU when available, otherwise on the CPU.',
    features: [
      'Original-size enhancement, or 2× and 4× upscaling',
      'Adjustable enhancement strength',
      'Before/after slider and a 100% view for checking fine detail',
      'Keeps transparency (alpha channel)',
      'Automatic GPU (WebGPU) or CPU processing, with a cancel button',
      'Export as WebP',
    ],
    steps: [
      'Open the tool and upload a PNG, JPG or WebP image, or load the built-in low-resolution example.',
      'Pick the output size (original, 2× or 4×), the enhancement strength and the device, then start enhancing.',
      'Drag the comparison slider and check faces and text at 100%, then download the result as WebP.',
    ],
    limits: [
      'Input: up to 25 MB, 4 megapixels and 4096 px on the longest side.',
      'Output: up to 16 megapixels and 8192 px per side; scales that would exceed this are disabled.',
      'The first run downloads about 27 MB of model files. CPU mode and large images are noticeably slower.',
      'The AI invents plausible texture. It cannot recover detail lost to strong blur, and it may change faces, small text or patterns.',
    ],
    privacy: 'Your image never leaves the browser. The site only serves static files and the AI model; all enhancement happens on your device.',
    faq: [
      ['Can it fix a badly out-of-focus photo?', 'Only partly. Super-resolution works best on low-resolution and compression damage. Information lost to heavy blur is gone, so the model guesses texture instead. Always inspect the result at 100%.'],
      ['Do I need a graphics card?', 'No. With a WebGPU-capable browser such as current Chrome or Edge it uses your GPU; otherwise, or if the GPU run fails, automatic mode switches to the CPU, which is slower but works.'],
      ['Why are 2× and original size made from the 4× result?', 'The model always upscales 4×; smaller outputs are scaled down from that result, which keeps quality consistent across sizes.'],
    ],
  },

  'online-drawing': {
    summary: 'Online Drawing & Image Editor is a free browser workspace for drawing and everyday photo editing. You can start from a blank canvas or open a photo, add brush strokes, text and shapes on separate layers, crop and adjust colours, then save an editable project or export a PNG, JPG or WebP image.',
    features: [
      'Brush, eraser, text and shape tools',
      'Layers that can be moved, resized and recoloured',
      'Cropping and colour adjustments for photos',
      'Editable projects saved as .imghub.json files',
      'Export to PNG, JPG or WebP',
    ],
    steps: [
      'Create a canvas at the size you need, or open an image from your device.',
      'Add drawing, text or shape layers and adjust their position, size and colour.',
      'Save the project to keep editing later, or export the finished picture as PNG, JPG or WebP.',
    ],
    limits: [
      'Each canvas side is limited to 4096 px; larger images are scaled down proportionally when opened.',
      'Imported images can be up to 25 MB; a project can hold up to 40 layers.',
      'JPG export has a white background. Use PNG or WebP if you need transparency.',
      'Photoshop PSD files are not supported. Exported images are flattened, so keep the project file for later edits.',
    ],
    privacy: 'Editing happens in your browser. Images and projects are read from and saved to your own device, not uploaded.',
    faq: [
      ['Can I open a PSD file?', 'No. The editor opens its own .imghub.json projects and common image formats such as PNG, JPG and WebP.'],
      ['Can I change the text after exporting?', 'Not in the exported image, because it is flattened. Reopen the saved .imghub.json project to edit the original text and layers.'],
      ['Is there a size preset for social media?', 'You set the canvas size yourself when creating it, so you can enter any width and height up to 4096 px.'],
    ],
  },

  'pic-press': {
    summary: 'PicPress Image Compressor is a free online tool that makes JPG, PNG and WebP files smaller in your browser. You can compress many images at once, choose an encoder quality or a target size in KB, limit the longest edge, compare before and after, and download single files or a ZIP.',
    features: [
      'Batch compression of JPG, PNG and WebP',
      'Quality mode or target-size mode (1 to 10,240 KB)',
      'Optional output format and longest-edge limit (up to 8192 px)',
      'Automatic mode keeps whichever is smaller: the new file or your original',
      'Side-by-side comparison with real file sizes',
      'Download one by one or as a ZIP',
    ],
    steps: [
      'Upload or drag in one or more JPG, PNG or WebP images.',
      'Choose quality mode or target-size mode, then set the output format and longest edge if needed.',
      'Start compressing, compare the results and their sizes, and download single files or a ZIP.',
    ],
    limits: [
      'Up to 50 images per batch, 50 MB per file and 200 MB in total.',
      'PNG at the original size is optimised losslessly, so the quality slider does not affect PNG.',
      'JPG does not support transparency; transparent areas are filled.',
      'Very small size targets may be impossible without reducing dimensions; unmet targets are flagged.',
    ],
    privacy: 'Images are compressed locally in your browser and are not uploaded to any server.',
    faq: [
      ['Why did my image barely shrink?', 'It was probably already well compressed. At the same dimensions, automatic mode keeps the smaller original instead of re-encoding it larger. Lower the quality or the longest edge to go further.'],
      ['How do I get an image under a specific size, like 200 KB?', 'Switch to target-size mode and enter 200. The tool searches for a suitable quality and, if you allow it, scales the image down proportionally.'],
      ['Can I convert PNG to WebP or JPG?', 'Yes. Choose the output format before compressing.'],
    ],
  },

  'image-ocr': {
    summary: 'Online OCR is a free image-to-text tool that reads text from screenshots and photos directly in your browser with the PP-OCRv5 model. It recognises Simplified Chinese, Traditional Chinese, English and Japanese, even mixed in one image, without choosing a language, and lets you check every line before copying or downloading the text.',
    features: [
      'Mixed Chinese (Simplified and Traditional), English and Japanese recognition',
      'Upload, paste a screenshot, or try the sample image',
      'Whole-image or selected-region recognition, rotation and small-text enhancement',
      'Long screenshots split into overlapping tiles automatically',
      'Text boxes and per-line confidence for proofreading',
      'Copy the text or download TXT and a boxes JSON',
    ],
    steps: [
      'Upload a PNG, JPG or WebP image, paste a screenshot, or load the multilingual sample.',
      'Keep automatic recognition, or select a region, rotate the image or turn on small-text enhancement.',
      'Run recognition, compare low-confidence lines with the image, then edit and copy or download the text.',
    ],
    limits: [
      'Up to 25 MB, 12 megapixels and 16,000 px on the longest side per image.',
      'The first run downloads about 58 MB of engine and model files.',
      'Only the four scripts above are supported; it is not a universal recogniser for every language.',
      'Tables, complex columns, handwriting and heavy blur need careful checking.',
    ],
    privacy: 'Images are processed in your browser and never uploaded. Only the OCR engine and model files are downloaded.',
    faq: [
      ['Do I have to choose the language?', 'No. One joint model reads Simplified Chinese, Traditional Chinese, English and Japanese, including images that mix them.'],
      ['Does it work without a GPU?', 'Yes. Automatic mode prefers WebGPU and falls back to your CPU, which takes longer but gives the same result.'],
      ['Can it read a long chat screenshot?', 'Yes, up to 16,000 px tall. Long images are split into overlapping tiles and duplicate lines are removed.'],
    ],
  },

  'watermark-adder': {
    summary: 'Add Watermark is a free online tool for putting a text or logo watermark on a photo before you share it. You can change the size, position, angle and opacity, or repeat the watermark across the whole image, preview the result and download it as PNG, JPG or WebP.',
    features: [
      'Text watermark or image (logo) watermark',
      'Size, opacity, angle and position controls',
      'Tiled mode with adjustable spacing to cover the whole image',
      'Live preview; download as PNG, JPG or WebP (the original format by default)',
    ],
    steps: [
      'Upload the photo you want to protect and choose a text or image watermark.',
      'Type your text or upload a logo, then adjust size, opacity, angle and position; turn on tiling to repeat it.',
      'Check that the watermark reads well on light and dark areas, then download the image.',
    ],
    limits: [
      'JPG has no transparency, so transparent areas are filled with white.',
      'The watermark is merged into the picture and cannot be removed from the exported file, so keep your original.',
      'A logo without a transparent background will show a rectangle behind it; use a transparent PNG.',
    ],
    privacy: 'Both the photo and the logo are processed in your browser and are not uploaded.',
    faq: [
      ['Can I use my own logo?', 'Yes. Choose the image watermark, upload your logo and adjust its scale, opacity and rotation.'],
      ['How do I cover the whole image with the watermark?', 'Turn on tiling and adjust the spacing, angle and opacity. Turn it off to place a single watermark.'],
    ],
  },

  'ai-watermark-remover': {
    summary: 'AI Watermark Remover is an experimental browser tool for images you created with AI generators. It can rebuild a whole image to test against invisible watermarks from GPT-image or Nano Banana, restore the visible Gemini sparkle mark, repair small marked areas with local inpainting and strip metadata. Everything runs on your device, and removal of invisible watermarks is not verified.',
    features: [
      'Experimental whole-image reconstruction with adjustable strength and resolution',
      'Restoration of the visible Gemini sparkle mark',
      'Local AI inpainting for small marked areas',
      'Metadata cleaning',
      'Device, timing, PSNR and before/after comparison',
      'Export as WebP at the original dimensions',
    ],
    steps: [
      'Upload a PNG, JPG or WebP image and choose the processing mode.',
      'Choose GPU or CPU, the working resolution and the strength, then run it.',
      'Compare the result with the original and check the quality figures, then export WebP.',
    ],
    limits: [
      'Up to 25 MB, 12 megapixels and 8192 px per side.',
      'The first reconstruction downloads about 32 MB; local inpainting about 40.8 MB.',
      'An inpainting selection must cover less than 25% of the image.',
      'Reconstruction changes fine detail. There is no detector, so removal of SynthID or other invisible watermarks cannot be confirmed.',
      'Metadata cleaning does not remove watermarks that are part of the pixels.',
    ],
    privacy: 'Images stay on your device. Processing uses your browser’s WebGPU or CPU; there is no server and no API key.',
    faq: [
      ['Is this for removing other people’s watermarks?', 'No. It is meant for images you generated or own. Removing a watermark from someone else’s work can infringe their rights.'],
      ['Does it really remove SynthID?', 'That is not verified. The tool has no SynthID detector, and the PSNR value only measures how much the pixels changed.'],
      ['Can it use my GPU?', 'Yes, through WebGPU in supported browsers, with automatic fallback to the CPU.'],
    ],
  },

  'subtitle-screenshot': {
    summary: 'Subtitle Screenshot Generator is a free online tool that places your own lines of dialogue on a background image, in the style of a film or speech subtitle. It supports single-language and bilingual captions, custom fonts, sizes and colours, and saves the result as a PNG for quote graphics and caption memes.',
    features: [
      'Built-in backgrounds or your own JPG/PNG',
      'Single-language or bilingual subtitles',
      'Font, size and colour controls',
      'Live preview and PNG download',
    ],
    steps: [
      'Pick a built-in background or upload your own JPG or PNG.',
      'Type the lines, choose single-language or bilingual layout and style the text.',
      'Check the line breaks and placement in the preview, then save the PNG.',
    ],
    limits: [
      'Backgrounds are processed at up to 800 px wide.',
      'It makes still images only. It does not transcribe audio or export SRT subtitle files.',
    ],
    privacy: 'The image is drawn in your browser; uploaded backgrounds are not sent to a server.',
    faq: [
      ['Can it generate subtitles from a video automatically?', 'No. It uses text you type. If the words already appear in a screenshot, extract them with Online OCR first.'],
      ['Can I use my own photo?', 'Yes. Upload it to replace the built-in background.'],
    ],
  },

  'meme-slicer': {
    summary: 'Meme Slicer is a free online tool that cuts an image into an even grid of rows and columns, such as a 3×3 nine-tile post, a sticker sheet or a long image split into parts. You preview the grid, then download all pieces as PNG files in one ZIP, named by row and column.',
    features: [
      '1 to 10 rows and 1 to 10 columns',
      'Grid preview before exporting',
      'ZIP of PNG tiles named slice_row_column.png',
    ],
    steps: [
      'Upload the image you want to split.',
      'Set the number of rows and columns and check the preview grid.',
      'Export the ZIP and unzip it to get the PNG tiles.',
    ],
    limits: [
      'The grid is always even; it does not detect individual stickers. Crop irregular sheets first.',
      'The red preview lines are not included in the exported tiles.',
    ],
    privacy: 'The image is sliced in your browser and is not uploaded.',
    faq: [
      ['How do I make a nine-grid image?', 'Set 3 rows and 3 columns, then export.'],
      ['How do I split a long screenshot into parts?', 'Set columns to 1 and rows to the number of parts you want; the height is divided evenly.'],
    ],
  },

  'dnd-alignment': {
    summary: 'DND Alignment Grid Generator is a free online tool for making the classic nine-cell alignment chart, from Lawful Good to Chaotic Evil. You place a picture in each cell, adjust its crop, optionally add a line of text, and download the finished chart as one WebP image.',
    features: [
      'Nine alignment cells, from Lawful Good to Chaotic Evil',
      'Per-cell image upload, zoom and position',
      'Optional description or quote for each alignment',
      'Live preview and WebP export',
    ],
    steps: [
      'Upload an image for each of the nine alignment cells.',
      'Select a cell to adjust zoom and position, and turn on descriptions if you want captions.',
      'Review the full chart and download it as WebP.',
    ],
    limits: [
      'Each cell has a fixed shape, so images with other aspect ratios need manual positioning.',
      'It does not decide anyone’s alignment; you choose where each picture goes.',
    ],
    privacy: 'Images are combined in your browser and are not uploaded.',
    faq: [
      ['Can I add a quote to each cell?', 'Yes. Turn on alignment descriptions and type a line for each cell; it is included in the export.'],
      ['Why is part of my character cut off?', 'Select the cell and adjust zoom and the horizontal and vertical position to show the important area.'],
    ],
  },

  'mbti-grid': {
    summary: 'MBTI Personality Image Generator is a free online tool that turns chosen MBTI types and pictures into one comparison grid. Start from the built-in papercraft characters or use your own images for any of the 16 types, adjust each crop, and export a single WebP image. It does not test or guess anyone’s personality.',
    features: [
      'Choose any 1 to 16 MBTI types',
      'Built-in papercraft character examples',
      'Replace any cell with your own image and adjust its crop',
      'Grid layout adapts to the number of types; WebP export',
    ],
    steps: [
      'Choose the MBTI types you need, or start from a built-in character set.',
      'Upload your own picture for each type and adjust its zoom and position.',
      'Check the finished grid and download it as WebP.',
    ],
    limits: [
      'At least one type must stay selected.',
      'The layout changes with the number of types, so recheck crops before downloading.',
      'There is no personality questionnaire or automatic classification.',
    ],
    privacy: 'Your pictures are combined in the browser and are not uploaded.',
    faq: [
      ['Can I compare just four types?', 'Yes. Deselect the others; the grid rearranges for four.'],
      ['Will it tell me my MBTI type?', 'No. It only makes an image from types you choose. For a test, see the MBTI Personality Test on OumaShu.'],
    ],
  },

  'youtube-thumbnail': {
    summary: 'Video Thumbnail Downloader is a free online tool that fetches the cover image of a YouTube or Bilibili video. Paste a link or a BV/AV ID, compare the available sizes, and download the cover as WebP for notes, references or layout research.',
    features: [
      'YouTube links and Bilibili links or BV/AV IDs',
      'Several YouTube quality options with real dimensions shown',
      'WebP download and a link back to the original video',
    ],
    steps: [
      'Paste a YouTube link, a full Bilibili video link or a BV/AV ID.',
      'Fetch the cover and compare the available quality options.',
      'Choose an image and download it as WebP, or open the video to check it.',
    ],
    limits: [
      'Not every YouTube video has a maximum-resolution cover; choose another quality if it is missing.',
      'b23.tv short links are not accepted; use the full bilibili.com/video/ link.',
      'Private videos and platform rate limits can prevent retrieval.',
      'It downloads the cover image only, not the video or its audio.',
    ],
    privacy: 'Your browser requests the cover directly from YouTube or Bilibili. The link is not sent to OumaShu or ImgHub servers.',
    faq: [
      ['Why is the maximum resolution missing?', 'The video does not provide a maxres image. Pick the standard or high-quality option instead.'],
      ['Can it download the video?', 'No. It only saves the still cover image.'],
      ['Please respect copyright', 'Thumbnails belong to their creators. Use them for reference or with permission.'],
    ],
  },

  'wiggle-studio': {
    summary: 'Wiggle Studio is a free browser tool that turns part of a still photo into springy, jiggly motion. You paint the area that should move, pick a motion preset and tune its strength and speed, then record a looping GIF, or a WebM or MP4 video if your browser supports it.',
    features: [
      'Paint the area that should move',
      'Motion presets with adjustable intensity and speed',
      'Drag the soft area directly and record your own gestures',
      'Export a looping GIF, or WebM/MP4 where supported, 1 to 10 seconds long',
    ],
    steps: [
      'Upload a PNG, JPG or WebP photo and paint the area you want to wiggle.',
      'Choose a motion preset, adjust intensity and speed, and preview or drag the effect.',
      'Choose a format and a duration of 1 to 10 seconds, record, and download the animation.',
    ],
    limits: [
      'Images must be 80 MB or smaller.',
      'WebM and MP4 are only offered if your browser can record them; GIF always works.',
      'Smoothness depends on your browser and device.',
    ],
    privacy: 'The photo is animated and recorded in your browser and is not uploaded.',
    faq: [
      ['Why is the MP4 button disabled?', 'Your browser cannot record that video codec. Choose GIF or WebM instead.'],
      ['Can I make only one object move?', 'Yes. Paint just that object and leave the background unpainted.'],
    ],
  },

  'full-page-screenshot': {
    summary: 'Full Page Screenshot is a free browser tool for capturing your screen or stitching a scrolling web page into one long image. As you scroll, it compares frames and adds only new content, keeps sticky headers once, and lets you crop the result before downloading a PNG. It works in desktop Chrome, Edge and Firefox.',
    features: [
      'Instant capture of a tab, window or whole screen',
      'Scrolling capture that stitches a whole web page',
      'Sticky headers and fixed footers kept only once',
      'Crop before export; PNG download',
    ],
    steps: [
      'Choose instant capture, or choose full-page capture and pick the browser tab to record.',
      'For a long page, start at the top and scroll down steadily, then return to the tool and select Finish.',
      'Drag the selection edges to keep the part you want, then download the PNG.',
    ],
    limits: [
      'Long captures stop automatically at about 32,000 px tall.',
      'Desktop Chrome, Edge or Firefox only; mobile browsers cannot capture the screen.',
      'If you scroll too fast it asks you to scroll back a little before continuing.',
    ],
    privacy: 'Capturing and stitching happen in your browser. There is no screenshot server and nothing is stored.',
    faq: [
      ['Why is the scrollbar in my screenshot?', 'It captures what the tab really shows. Drag the right edge of the selection inward before exporting.'],
      ['Does it work on my phone?', 'No. Mobile browsers do not allow screen capture.'],
    ],
  },

  yifang: {
    summary: 'Yifang (弈方) is a free bilingual site, in Chinese and English, that teaches eight classic games from zero: the Rubik’s Cube, chess, xiangqi (Chinese chess), shogi, Go, mahjong, Texas hold’em and baccarat. Each game has step-by-step illustrated lessons, a glossary, puzzles and an interactive board or table, plus play against the computer or a friend in the browser.',
    features: [
      'Eight games: Rubik’s Cube, chess, xiangqi, shogi, Go, mahjong, Texas hold’em and baccarat',
      'Lessons that go from the goal and pieces to rules, guided moves and free practice',
      'Glossaries, history pages and puzzles for each game',
      'Play against the computer in the browser',
      'Play with a friend online for chess, xiangqi, shogi, Go, Texas hold’em and mahjong',
      'Three separate mahjong rule sets: Japanese riichi, Chinese official and Sichuan',
    ],
    steps: [
      'Open Yifang and choose a game on the world map.',
      'Start with the first lesson and follow each guided move on the interactive board.',
      'When you are ready, practise against the computer, solve puzzles or invite a friend.',
    ],
    limits: [
      'Content is in Simplified Chinese and English only.',
      'Friend games connect browsers directly (WebRTC) and work best on the same network; connections across networks are not guaranteed. An optional public room mode uses a third-party signalling service.',
      'Card games use practice chips only. There is no real money, top-up or cash-out.',
      'Not every game offers the same play modes.',
    ],
    privacy: 'There are no accounts or logins. Games run in your browser; friend games connect your browsers to each other.',
    faq: [
      ['Is Yifang free?', 'Yes. There are no accounts, downloads or payments.'],
      ['I have never played. Is it too hard?', 'No. Every course starts from zero, including what the pieces or cards are called and how to read the board.'],
      ['Can I play mahjong with friends?', 'Yes. Mahjong and five other games support online games with friends in the browser.'],
    ],
  },
};

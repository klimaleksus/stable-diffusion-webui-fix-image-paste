# fix-image-paste

This is javascript Extension for [AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) fixes image paste from clipboard to any WebUI form.

Notably, it allows to paste into `img2img > Inpaint upload > Mask` for the time being.  
(Inspired by my own [xy-plot-online-grid-viewer](https://github.com/klimaleksus/xy-plot-online-grid-viewer)!)

## Installation:

Copy the link to this repository into `Extension index URL` in WebUI Extensions tab:
```
https://github.com/klimaleksus/stable-diffusion-webui-fix-image-paste
```
Also you may clone/download this repository and put it to `stable-diffusion-webui/extensions` directory.

## Usage:

1. Hover your mouse pointer over the image input where you want to paste file/pixels from the clipboard.
2. Press Ctrl+V or Shift+Insert (or whatever) to initiate paste on the page.
3. If your image is not pasted yet, move the mouse exactly over the control accepting a file, and **not on any label inside it** (if there is previous image visible – try to close/delete it first), then try again.
4. If it is still not working – hit Ctrl+V twice in a row to fallback to default paste method (however, WebUI might put your picture into the wrong input field).

### This extension does not create any tabs or controls on its own, nor it has any settings.

Use `Extensions` tab to disable this extension if you need to switch it off.

P.S. pasting files from file system seems to work only in Chrome.

## EOF

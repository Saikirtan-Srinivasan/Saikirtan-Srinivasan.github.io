---
name: Saikirtan Srinivasan Portfolio
description: One engineer's stack, from a 2.4 GHz RF front end up to a robot's navigation software.
colors:
  signal: "oklch(0.55 0.2 32)"
  signal-deep: "oklch(0.48 0.18 32)"
  signal-light: "oklch(0.7 0.19 38)"
  f5: "oklch(0.93 0.035 190)"
  f4: "oklch(0.83 0.06 200)"
  f3: "oklch(0.70 0.085 215)"
  f2: "oklch(0.42 0.085 232)"
  f1: "oklch(0.25 0.06 245)"
  paper: "oklch(0.975 0.006 200)"
  ink: "oklch(0.21 0.035 240)"
  on-dark: "#fff"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 10.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.86
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 3.7vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.4375rem"
    fontWeight: 700
    lineHeight: 1.15
    fontVariation: "'wdth' 87"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.055em"
    fontVariation: "'wdth' 75"
rounded:
  none: "0px"
spacing:
  pad: "clamp(20px, 4.2vw, 64px)"
  rail: "52px"
  bar: "46px"
  entry-y: "clamp(1.25rem, 2.4vw, 2rem)"
  layer-top: "clamp(3.5rem, 8vw, 7rem)"
  layer-bottom: "clamp(3rem, 6vw, 5rem)"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.signal-deep}"
  layer-bar-f5:
    backgroundColor: "{colors.f5}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0.75rem clamp(1rem, 2vw, 1.75rem)"
  layer-bar-f1:
    backgroundColor: "{colors.f1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0.75rem clamp(1rem, 2vw, 1.75rem)"
  rail-segment:
    backgroundColor: "{colors.f3}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    width: "{spacing.rail}"
  rail-contact:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-dark}"
    typography: "{typography.label}"
    height: "96px"
  entry:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "clamp(1.25rem, 2.4vw, 2rem) 0"
  contact-band:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-dark}"
    padding: "clamp(4rem, 9vw, 8rem) clamp(20px, 4.2vw, 64px) 2rem"
---

# Design System: Saikirtan Srinivasan Portfolio

## Overview

**Creative North Star: "The Layer Stack"**

The page is drawn as an engineering stack diagram that happens to be a portfolio. Five full-bleed colour fields run from Autonomy at the top to RF at the bottom, each one a step darker than the one above it, and the work sits inside the layer it was done at. The same five bands appear three times at three scales: as the hero diagram, as the fixed rail that navigates the page, and as the sections themselves. Nothing else on the page competes with that one picture.

The surface is flat, square and dense with fact. Structure comes from colour fields and 1.5px rules, never from boxes; hierarchy comes from one typeface changing width, never from a second family. One vermilion signal marks what a visitor can act on or should notice, and it is the only colour outside the blue-green ramp.

**Key Characteristics:**
- Five tonal fields in one hue family, ordered light to dark, each tied to one layer of the stack
- A single typeface (Archivo) worked along its width axis: 62%, 75%, 87%, 100%
- Square corners, 1.5px rules, full-bleed bands; no cards, no elevation
- One signal colour, used for action, thread, status and position
- Still by default: one entrance animation, then state changes only

## Colors

A cool monochrome depth ramp on a paper ground, interrupted by one warm signal.

### Primary
- **Signal Vermilion** (`signal`): the primary button, the rail's Contact segment, the whole contact band, the current-layer diamond on the rail, thread and status markers on light fields, text selection and the focus ring. Never used as a text colour on a layer field.
- **Signal Deep** (`signal-deep`): the hover state of the primary button, and nothing else.
- **Signal Light** (`signal-light`): the same thread and status markers when they sit on the two dark layers (`f2`, `f1`), where Signal Vermilion would sink into the field.

### Secondary
- **Layer 5, Shallow** (`f5`): Autonomy. The palest field.
- **Layer 4** (`f4`): Edge ML.
- **Layer 3, Mid-water** (`f3`): Firmware. The last field that takes ink text.
- **Layer 2** (`f2`): Circuits and PCB. The first field that takes white text; also the scrollbar thumb.
- **Layer 1, Deep** (`f1`): RF. The darkest field.

### Neutral
- **Cool Paper** (`paper`): page ground, hero and the background section under the stack.
- **Ink** (`ink`): all text on paper and on `f5` to `f3`; the fill of the monogram segment at the head of the rail and of the skip link.
- **On Dark** (`on-dark`): text on `f2`, `f1`, the signal fills and ink fills.

Secondary text and rules are not separate colours. Each field derives them by mixing its own text colour into its own background in oklch: secondary text at 78 to 90 percent, rules at 22 to 34 percent, the share rising as the field darkens.

### Named Rules
**The Depth Is Meaning Rule.** A ramp step is a layer of the stack. `f5` to `f1` appear only in stack order and only to mean their layer; they are never picked for decoration, contrast or variety.

**The Field Sets The Ink Rule.** A component never names its own colours. It reads four local values from the field it sits on (field, text, secondary text, rule), so the same entry markup is correct on paper and on all five layers.

**The One Signal Rule.** Vermilion means "act here", "this continues elsewhere", "status" or "you are here". If a use fits none of those, it does not get the signal.

## Typography

**Display Font:** Archivo variable, width 62 to 125, weight 100 to 900 (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Archivo at normal width
**Label Font:** Archivo at 75% width

**Character:** One family doing every job. Names are set extra-condensed and heavy so a long word fills a band like a stencil on equipment; reading text stays at normal width and regular weight so it is plain to read.

### Hierarchy
- **Display** (800, 62% width, uppercase, `clamp(3.5rem, 10.5vw, 6rem)`, line-height 0.86 to 0.88): the owner's name and the five layer names. The name tracks at -0.005em.
- **Headline** (800, 62% width, uppercase, line-height 0.9 to 0.95): layer names inside the hero bars (`clamp(1.9rem, 3.7vw, 3.5rem)`), the contact question (`clamp(2.5rem, 6.4vw, 5.25rem)`), the two headings under the stack (`clamp(2rem, 4vw, 3rem)`) and the rail monogram.
- **Title** (700, 87% width, 1.4375rem, line-height 1.15): entry titles. A continuation entry drops to 600 at 1.125rem. Definition terms under the stack use 700 at 1.1875rem. The button label shares this width and weight.
- **Body** (400, 100% width, 1.0625rem, line-height 1.55): descriptions, capped at 62ch. The hero lead is `clamp(1.125rem, 1.55vw, 1.375rem)` at 1.45, capped at 34ch. A layer's one-line summary is 500 at 1.25rem. Inline links are 600.
- **Label** (600, 75% width, 0.8125rem, letter-spacing 0.055em, uppercase, line-height 1.5): entry codes (800 at 1rem), dates and roles, status flags, rail segment names, the diagram key and the footer line. Tool lists share the width and weight but are sentence case at 0.9375rem with 0.01em tracking.

### Named Rules
**The Width Not Family Rule.** Hierarchy is made by moving along Archivo's width axis and weight, not by adding a typeface. The label voice is condensed caps; it is never monospace.

**The Caps Are Names Rule.** Uppercase is for names and labels only: the owner, a layer, a code, a date. Anything a visitor reads as a sentence is sentence case at normal width.

## Layout

The page is a single column of full-bleed bands offset by the rail. On desktop the body is padded left by the rail width (52px) and every band uses one fluid gutter, `clamp(20px, 4.2vw, 64px)`, on all sides. There is no max-width container; bands run edge to edge and text is constrained by measure (34ch, 58ch, 62ch) instead.

- **Hero:** two columns, `0.82fr / 1fr`, minimum height `min(100svh, 960px)`. Identity and contact on the left, the five-bar diagram filling the right column top to bottom with equal-height bars.
- **Layer head:** layer name left, a summary and tool list in a column of up to 26rem right, aligned to the baseline of the name.
- **Entry:** a three-column row, `3.5rem / up to 17rem / 1fr`: code, title with dates, description. Rows are separated by a top rule and padded `clamp(1.25rem, 2.4vw, 2rem)`.
- **Under the stack:** two columns, `0.8fr / 1fr`, of rule-separated definition lists on paper.
- **Vertical rhythm:** layers open with `clamp(3.5rem, 8vw, 7rem)` and close with `clamp(3rem, 6vw, 5rem)`.

Responsive behaviour: at 1040px the layer head stacks. At 900px the rail becomes a 46px top bar with horizontal names, the hero and the under-stack section go to one column, hero bars take a 92px minimum height, and an entry becomes two columns (2.6rem code, then title and description stacked). At 520px body text drops to 1rem, the hero bars stack name over contents, and the contact links stack.

## Elevation & Depth

There is no elevation. Nothing floats, lifts or casts. Depth is the subject of the page and is carried entirely by the tonal ramp: lower in the stack is darker. Position within the page is shown by the rail, not by layering surfaces over one another. The rail is the only fixed element and it sits beside the content, not above it.

`box-shadow` appears twice, both times as a hard, unblurred fill and never as a shadow: a 1rem same-colour spread that widens the tint behind a targeted entry, and a 5px inset bar under the current segment of the narrow top bar.

### Named Rules
**The Flat Stack Rule.** A surface is distinguished from its neighbour by its field colour or by a rule. Blur, offset shadows and translucent overlays are not part of this system.

## Shapes

Every corner is square (0px). The form language is the horizontal band: full-width rectangles stacked without gaps. Separation inside a band is a 1.5px rule in the field's own rule colour. The only non-rectangular marks are small solid squares: 0.6rem for a status flag, and the same square turned 45 degrees for position and threads (9px on the rail, 0.5rem on thread links). Icons are 2px square-capped strokes or solid marks, 16 to 22px, in the current text colour. The portrait is a 4:5 square-cornered crop with no frame.

## Components

### Buttons
- **Shape:** square, 44px minimum height, `0 1.25rem` padding, icon and label 0.6rem apart.
- **Primary:** Signal Vermilion fill, white label at 87% width, weight 700, no underline. One per view; in the build it is the email action.
- **Hover / Focus:** fill moves to Signal Deep over 0.2s. Focus is the global 3px ring offset 3px.
- **Secondary:** there is no secondary button. Other actions are text links at weight 600 with an 18px icon, on the same 44px line height.

### Text links
- **Style:** inherit the field's text colour, underlined 1.5px thick at 0.22em offset. Inside entries the underline rests at 45 percent of the text colour and firms to full on hover.
- **Icons:** a trailing 16px arrow nudges 2 to 3px in its own direction on hover (out, up or down) over 0.3s.
- **Thread links:** a link that jumps to the same project in another layer is prefixed with the signal diamond and ends with an up or down arrow.

### Layer bar (signature)
The hero diagram's unit. A full-width link in its layer's field: layer name in Headline on the left, the codes and names of the work in that layer on the right in 87% width, weight 500, 0.9375rem, secondary text colour. Five bars share the column height equally with no gap. On hover the left padding grows (`clamp(1.6rem, 3.2vw, 2.9rem)`) over 0.35s so the bar's contents slide right. On load each bar settles once from 34px above, 0.8s, staggered 80ms from the bottom bar up.

### Navigation (the rail)
- **Desktop:** a fixed 52px column on the left edge, full height. An ink monogram square at the top, then one segment per layer in its field colour with its name set vertically in the label voice, then a 96px Signal Vermilion contact segment.
- **States:** the hovered or current layer segment grows to 1.9 times its share over 0.35s; the current segment carries a 9px signal diamond straddling the rail's right edge (white when Contact is current).
- **At 900px and below:** a 46px top bar. Segments are equal width with horizontal 62% width names at 0.75rem, Contact shows a mail icon in a 44px square, and the current segment is marked by a 5px signal bar along its bottom edge and weight 800.

### Entry
A rule-topped row, not a card. Code in the label voice at weight 800, title in Title, then dates and role in the label voice in secondary colour, then body text and links. A status flag is a label line led by a 0.6rem signal square. A continuation entry (the same project in another layer) uses the lighter title and a secondary-colour code. When an entry is the link target it takes an 11 percent tint of the field's text colour, extended 1rem on every side.

### Contact band
The page's last band and the only full signal field: white Headline question capped at 18ch, links at `clamp(1.125rem, 2vw, 1.5rem)` weight 600 with 22px icons and 48px targets, underline thickening to 3px on hover, and a label-voice footer line over a 40 percent white rule.

### Focus
A 3px Signal Vermilion outline offset 3px on paper and the three light layers; white on the two dark layers and on the contact band.

## Do's and Don'ts

### Do:
- **Do** place new work inside the layer it belongs to and let that layer's field colour it; split work that spans layers and join the parts with thread links.
- **Do** build components from the four local field values so they hold on paper and all five layers without overrides.
- **Do** separate items with a 1.5px rule in the field's rule colour and full-bleed bands.
- **Do** set names in 62% width, weight 800 caps, entry titles in 87% width, labels in 75% width semibold caps, and reading text at normal width.
- **Do** switch markers to Signal Light on `f2` and `f1`, and the focus ring to white on dark and signal fields.
- **Do** keep every interactive target at 44px or taller where it is a primary action, and honour `prefers-reduced-motion` by removing the entrance and all transitions.

### Don't:
- **Don't** use a ramp colour out of stack order or for anything other than its layer.
- **Don't** add a second accent, or use the signal as body text or as decoration.
- **Don't** add a second typeface, including a monospace for codes and tool lists.
- **Don't** round corners, box content into cards, or use blurred or offset shadows.
- **Don't** add scroll-triggered or looping motion; the bars settling once on load is the only entrance.
- **Don't** wrap bands in a max-width container; constrain text by measure instead.

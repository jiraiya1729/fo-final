<website_design>
The First Order landing page is a sophisticated, minimalist design that perfectly captures the essence of an elite founders collective. The design follows a clean, centered layout with generous whitespace that creates a premium feel appropriate for ambitious builders and entrepreneurs.

The page opens with a sleek navigation bar featuring the First Order logo on the left, with "Community" and "Initiatives" toggle buttons in the center, and "Apply" and "Join" buttons on the right - the "Join" button being prominently styled in black to drive conversions.

The hero section centers around a powerful headline that reads "A place to build your legacy." using an elegant serif font that conveys both tradition and ambition. The word "build" is italicized to emphasize the active, entrepreneurial nature of the community.

Below the headline, four key value propositions are presented in a clean, icon-driven format:
- High-signal community (with a network icon)
- Ambitious builders only (with a rocket icon) 
- Privacy-first approach (with a lock icon)
- Global reach with 1,000+ founders (with a globe icon)

Each feature point uses subtle icons and maintains consistent spacing, creating a scannable hierarchy that immediately communicates the collective's core values and scale.

The design maintains perfect balance through its use of whitespace, typography hierarchy, and strategic placement of interactive elements. The overall aesthetic is clean, professional, and aspirational - exactly what ambitious founders would expect from a high-caliber collective.
</website_design>

<high_level_design>
1. Color palettes:
   - Primary: Deep Charcoal (#1a1a1a) - for text, buttons, and strong elements
   - Secondary: Warm Gray (#6b7280) - for secondary text and subtle elements
   - Background: Pure White (#ffffff) - for clean, premium feel
   - Accent: Subtle Gray (#f3f4f6) - for button backgrounds and subtle dividers

2. Typography:
   - Primary: "Playfair Display" serif font for headlines and emphasis
   - Secondary: "Inter" sans-serif for body text and UI elements
   - Maintains sophisticated hierarchy with generous line spacing
</high_level_design>

<components>
<edit_component>
<file_path>src/components/blocks/heros/simple-centered.tsx</file_path>
<design_instructions>
Transform this into a pixel-perfect recreation of the First Order landing page. Update the navbar to show "First Order" logo on the left, center toggle buttons for "Community" and "Initiatives" (styled as pill buttons with gray background), and right-aligned "Apply" and "Join" buttons with "Join" in black. 

Change the main headline to "A place to build your legacy." using Playfair Display serif font, with "build" italicized. Replace the subtitle with four feature points in a vertical list format:

1. "High-signal community" with a network/nodes icon
2. "Ambitious builders only" with a rocket icon  
3. "Privacy-first approach" with a lock icon
4. "Global reach with 1,000+ founders" with a globe icon

Each feature should have consistent spacing, use Inter font for body text, and maintain the clean, minimal aesthetic. Remove any existing CTA buttons from the hero content area since the primary actions are in the navbar.

Use the specified color palette: deep charcoal (#1a1a1a) for primary text, warm gray (#6b7280) for secondary elements, pure white background, and subtle gray (#f3f4f6) for button backgrounds.
</design_instructions>
<references>src/components/blocks/heros/simple-centered.tsx</references>
</edit_component>

<edit_component>
<file_path>src/components/blocks/footers/centered-with-logo.tsx</file_path>
<design_instructions>
Update this footer to match the First Order branding. Replace the logo with "First Order" text in the same sophisticated style. Update the tagline to "Building the future, one founder at a time." 

Include relevant footer links such as "Community Guidelines", "Initiatives", "Apply", "Privacy Policy", and "Code of Conduct". 

Maintain the clean, centered layout with the same color scheme - deep charcoal text on white background. Keep the social media icons but make them more subtle using the warm gray color.

The footer should feel premium and minimal, reinforcing the high-caliber nature of the founders collective.
</design_instructions>
<references>src/components/blocks/footers/centered-with-logo.tsx</references>
</edit_component>

<edit_component>
<file_path>src/components/blocks/feature-sections/simple-three-column-with-small-icons.tsx</file_path>
<design_instructions>
Create a features section highlighting First Order's key initiatives and community benefits. Use three columns with the following content:

Column 1: "Vibeship Initiative" - "Connect with fellow founders through curated experiences and exclusive events. Build meaningful relationships that last beyond transactions." Use a ship or compass icon.

Column 2: "High-Signal Network" - "Join a carefully vetted community of ambitious builders. Every member is thoroughly screened for impact and potential." Use a network/graph icon.

Column 3: "Growth Acceleration" - "Access mentorship, resources, and partnerships that help you ship faster and scale smarter." Use a growth/trending icon.

Style with the established color palette and typography. Use Playfair Display for headings and Inter for body text. Keep the layout clean and spacious to maintain the premium feel.
</design_instructions>
<references>src/components/blocks/feature-sections/simple-three-column-with-small-icons.tsx</references>
</edit_component>

<edit_component>
<file_path>src/components/blocks/ctas/simple-centered.tsx</file_path>
<design_instructions>
Create a final call-to-action section that encourages founders to apply. Use the headline "Ready to build with the best?" in Playfair Display serif font.

Include supportive text: "Join an exclusive collective of ambitious founders who are actively building, shipping, and scaling. Applications are reviewed quarterly."

Provide two action buttons: "Apply Now" (primary black button) and "Learn More" (secondary gray button).

Keep the design minimal and centered, using the established color palette and generous whitespace. This should feel like a natural conclusion to the landing page experience.
</design_instructions>
<references>src/components/blocks/ctas/simple-centered.tsx</references>
</edit_component>
</components>
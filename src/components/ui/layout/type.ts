import type { UIComponent } from '@/components/ui/type';

type LayoutDomElements =
  | 'div' // A generic container.Useful for grouping elements together for styling purposes.
  | 'section' // Represents a standalone section of a document, like a chapter, tabbed content, or set of content grouped together.
  | 'article' // Represents a self - contained composition in a document, like a blog post, a magazine or newspaper story, or a forum post.
  | 'aside' // Represents a section of a page that consists of content that is tangentially related to the content around it, and which could be considered separate from that content.
  | 'header' // Represents a group of introductory or navigational aids.
  | 'footer' // Represents a footer for its nearest sectioning content or sectioning root element.
  | 'main' // Represents the dominant content of the body of a document or application.
  | 'nav' // Represents a section of a page that contains navigation links that appear on the page or within the section's context.
  | 'ul' // Represents an unordered list of items.
  | 'ol' // Represents an ordered list of items.
  | 'li'; // Represents a list item.

export type UILayoutComponent<
  T extends LayoutDomElements,
  P extends object = object,
> = UIComponent<T, P>;

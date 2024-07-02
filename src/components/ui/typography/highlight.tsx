import type { UIComponent } from '../type';
import Text from './text';

/**
 * Defines the base properties for highlighting functionality, including:
 * - `query`: A single string or an array of strings to be highlighted within the text.
 * - `children`: The text content that may contain the query strings to be highlighted.
 *
 */
type HighlightProps = {
  /**
   * The query string or strings to be highlighted within the text.
   */
  query: string | string[];

  /**
   * The text content that may contain the query strings to be highlighted.
   */
  children?: string;
};

/**
 * Extends `HighlightProps` by omitting `query` and making `children`
 * required. It introduces `queries`, an array of strings, ensuring multiple queries can
 * be specified for highlighting within the `children` text.
 *
 */
type HighlightTextProps = Omit<HighlightProps, 'query' | 'children'> & {
  /**
   * The text content that may contain the query strings to be highlighted.
   */
  children: string;

  /**
   * An array of strings to be highlighted within the text.
   */
  queries: string[];
};

/**
 * Renders text with specific substrings highlighted.
 */
const HighlightText = ({ children, queries, ...props }: HighlightTextProps) => {
  if (queries.includes(children)) {
    return (
      <Text as="mark" {...props}>
        {children}
      </Text>
    );
  }

  return children;
};

/**
 * Highlight allows you to highlight substrings of a text.
 *
 * Render the main string as children of the Highlight component, then pass the word(s) you want to highlight to the query prop.
 *
 * @example
 * <Highlight query={'spotlight'}>
 *    With the Highlight component, you can spotlight words.
 * </Highlight>
 *
 * @param {HighlightProps} props - The props of the component.
 *
 * @returns {JSX.Element} The Highlight component.
 */
const Highlight: UIComponent<'mark', HighlightProps> = props => {
  const { className, children, query, ...rest } = props;

  if (!query) {
    return <> {children} </>;
  }

  const queries = Array.isArray(query) ? query : [query];
  const regex = new RegExp(`(${queries.join('|')})`, 'gi');

  const parts = String(children).split(regex);

  return (
    <>
      {parts.map((part, index) => (
        <HighlightText key={`@id/${index}-${part}`} queries={queries} {...rest}>
          {part}
        </HighlightText>
      ))}
    </>
  );
};

Highlight.displayName = 'Highlight';

export default Highlight;

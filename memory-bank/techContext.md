# Technology Context

This file outlines the technologies used, development setup, technical constraints, and dependencies for the project.

## UI Component Management (ShadCN & MCP Tools)

This section details the guidelines and workflow for managing UI components using ShadCN and integrated MCP tools.

1.  **ShadCN Components**: Always use ShadCN components where applicable for building the user interface.

2.  **Primary Discovery Tool (Context7)**: Leverage the Context7 MCP Tool as your primary discovery engine for UI primitives, tokens, and unknown packages. Cross-reference component usage across registries if needed.

3.  **Secondary Discovery Tools**: If Context7 fails to resolve a component or token, escalate to secondary tools like Serper (for search) or Fetch MCP (for web scraping).

4.  **Custom Components (Fetch MCP)**: For any custom component URLs or GitHub repos provided by the user, extract metadata and relevant code using Fetch MCP. Prioritize schema-aligned component extraction.

5.  **ShadCN Context File (`shadcn-context.md`)**: Maintain a living "shadcn-context.md" file in the `memory-bank/` directory.
    -   Initialize it with every new project.
    -   Log each ShadCN component added, including source registry, overrides, and last update date.
    -   Use this log to detect redundancy and avoid re-installing already-available components.

6.  **Post-Installation Checks**: After component installation, trigger a lint, type check, and `prettier` run. Alert the user if a component introduces breaking types or deviates from current tokens.

7.  **Automatic Configuration Updates**: Automatically update Tailwind config, theme tokens, and `globals.css` based on the registry:style rules of the source component.

8.  **Handling Component Updates**: If a remote registry component has been updated since the last pull, prompt the user and offer an automated merge, preview diff, and apply.

9.  **Respect Custom Design System Rules**: Respect custom design system rules declared in registry metadata. These may include token mappings, font requirements, or provider setup instructions.

import { Project } from "@/app/types"

export const PROJECTS: Project[] = [
  {
    id: "wgsn-instock",
    title: "WGSN INstock",
    description:
      "An informative dashboard to search and compare price trends among fashion categories",
    images: ["/images/projects/Instock1.jpg"],
    tags: ["AngularJS", "React", "PHP", "MySQL"],
    fullTextContent: (
      <div>
        <p>
          INstock is a retail analytics app that scrapes retailer websites and
          allows users to search for fashion product data across many categories
          and retailers. Users can view product information (like retailer,
          category, price, stock, colors, sizes) and filter by any field.
        </p>
        <p>
          Users can also see aggregate data (e.g. distribution of Air Force 1
          shoes across retailers) with various chart types, or view time-series
          data of price/availability over time.
        </p>
        <p className="muted">
          Built in AngularJS with a later migration to React. Backend built with
          PHP.
        </p>
      </div>
    ),
  },
  {
    id: "reonomy",
    title: "Reonomy",
    description:
      "A commercial real estate intelligence app for learning anything there is to know about a property",
    images: [
      "/images/projects/Reonomy1.jpg",
      "/images/projects/Reonomy2.jpg",
      "/images/projects/Reonomy3.jpg",
    ],
    tags: ["TypeScript", "React", "Python", "Design Systems"],
    link: {
      url: "https://www.reonomy.com",
      label: "reonomy.com",
    },
    fullTextContent: (
      <>
        <p>
          Reonomy collects just about every type of data point available about
          commercial real estate properties. Users can search properties by
          address or filter by any of the hundreds of categories.
        </p>
        <p>Key features include:</p>
        <ul>
          <li>Data from county and MSA records covering most of the U.S.</li>
          <li>
            Information about real property owners for some properties (e.g. the
            person behind the LLC),
          </li>
          <li>Complete transaction history of a property</li>
          <li>Ability to search through an owner's portfolio</li>
          <li>Property tenants' info and history</li>
        </ul>
        <p>
          Built with TypeScript and React on the Frontend and Python flask on
          the backend. I ultimately created a design system with a component
          library to ensure style conformity and reduce development time.
        </p>
      </>
    ),
  },
  {
    id: "aptos-tournament",
    title: "Aptos Tournament",
    description:
      "A multi-game elimination-tournament on the Aptos blockchain, with all moves stored on-chain",
    images: [
      "/images/projects/AptosTournament1.jpg",
      "/images/projects/AptosTournament2.jpg",
      "/images/projects/AptosTournament3.jpg",
      "/images/projects/AptosTournament4.jpg",
    ],
    tags: ["TypeScript", "React", "Next.js", "GraphQL", "Aptos"],
    link: {
      url: "https://www.aptostournament.com",
      label: "aptostournament.com",
    },
    fullTextContent: (
      <>
        <p>
          Aptos tournament is an on-chain platform that hosts elimination-style
          tournaments, with a prize at the end for the winner (typically USDC or
          an NFT).
        </p>
        <p>
          The tournament runs through rounds, with each round offering 1 of 3
          possible games: trivia, rock-paper-scissors, or a game of chance.
          Eliminated players may spectate as another living player.{" "}
          <b>Every player interaction is stored on-chain.</b>
        </p>
        <p className="muted">
          Built with Next.js and styled with{" "}
          <a href="https://panda-css.com/">PandaCSS</a>. Using{" "}
          <a href="https://tanstack.com/query">TanStack query</a> (formerly
          React Query) to call an{" "}
          <a href="https://aptos.dev/en/build/indexer">GraphQL indexer</a> to
          read on-chain smart contract data, and using the{" "}
          <a href="https://aptos.dev/en/build/apis">Aptos REST API</a> to submit
          transactions.
        </p>
      </>
    ),
  },
  {
    id: "aptos-learn",
    title: "Aptos Learn",
    description: "An all-in-one platform for learning to build on Aptos",
    fullTextContent: (
      <>
        <p>
          Aptos Learn is an educational platform where developers can learn to
          write smart contracts and create dApps for the Aptos blockchain.
          Suitable for developers new to web3, as well as those coming from
          different chains.
        </p>
        <p>
          It offers workshops and tutorials, as well a library of starter code
          to get developers quickly set up. The site also offers a CLI tool,{" "}
          <code>create-aptos-dapp</code>, and various templates, which allows
          anybody to quickly bootstrap a frontend interface and a smart contract
          on Aptos.
        </p>
        <p className="muted">
          Built using Next.js. With markdown support via mdx and a component
          library to allow internal devs and non-devs to contribute code
          samples, articles, and tutorials.
        </p>
      </>
    ),
    images: ["/images/projects/AptosLearn1.jpeg"],
    tags: ["TypeScript", "React", "Next.js"],
    link: {
      url: "https://learn.aptoslabs.com",
      label: "learn.aptoslabs.com",
    },
  },
  {
    id: "aptos-docs",
    title: "Aptos Developer Documentation",
    description:
      "Documentation for the Aptos stack, including smart contracts, APIs, SDKs, CLI, indexer, blockchain, and nodes",
    images: [
      "/images/projects/AptosDocsLP1.jpeg",
      "/images/projects/AptosDocsLP2.jpeg",
      "/images/projects/AptosDocsPages1.jpeg",
      "/images/projects/AptosDocsPages2.jpeg",
    ],
    tags: ["TypeScript", "React", "Nextra"],
    link: {
      url: "https://aptos.dev",
      label: "aptos.dev",
    },
    fullTextContent: (
      <>
        <p>
          The Aptos Developer Documentation contains all the information
          necessary to develop on the Aptos network, letting web3 builders dive
          deeper into the Move smart contract language, indexers, SDKs, APIs,
          CLIs, and other tools.
        </p>
        <p>
          It also serves as an end-to-end learning tool for the Aptos
          blockchain, with guides for running and configuring a node.
        </p>
        <p className="muted">
          Built using <a href="https://nextra.site/">Nextra</a>, which supports
          markdown content via <a href="https://mdxjs.com/">mdx</a>.
        </p>
      </>
    ),
  },
  {
    id: "aptos-build",
    title: "Aptos Build",
    description:
      "Toolkit for Aptos builders. Helping developers manage API keys, track usage, and ",
    images: [
      "/images/projects/AptosBuild1.jpg",
      "/images/projects/AptosBuild2.jpg",
      "/images/projects/AptosBuild3.jpg",
      "/images/projects/AptosBuild4.jpg",
      "/images/projects/AptosBuild5.jpg",
      "/images/projects/AptosBuild6.jpg",
    ],
    tags: ["TypeScript", "React", "Nextra"],
    link: {
      url: "https://aptosbuild.com",
      label: "aptosbuild.com",
    },
    fullTextContent: (
      <>
        <p>
          Aptos Build is a toolkit for dApp developers, allowing builders to
          manage access to the Aptos APIs. Developers can create API keys, get
          real-time insights on usage, and upgrade quotas to scale with their
          app demands.
        </p>
        <p className="muted">
          Build with Next.js and <a href="https://panda-css.com/">PandaCSS</a>{" "}
          for styling.
        </p>
      </>
    ),
  },
]

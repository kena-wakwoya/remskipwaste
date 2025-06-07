# Skip Hire Selector
## Features

**Responsive Design** Adapts to different screen sizes for a seamless user experience.
**Interactive Skip Cards**
  - Clear display of skip size, price, and hire period.
  - Contextual Size Descriptions Which Helps users visualize skip capacity (e.g., "Fits approx. 40-50 bin bags").
  - Prominent Road Placement Warnings Which Clearly indicates skips not allowed on public roads with an explanatory overlay.
  - Full Card Interaction so that Single-click to select a skip, double-click to deselect it.
  - User Guidance - "Unsure which skip size you need?" section provides helpful tips on choosing the right skip.

## My Approach

My approach to this design challenge was centered around user experience (UX) and clarity, aiming to transform the initial design into a more intuitive and informative selection process.

1.  Problem Identification
  - The primary challenge in the original design was the lack of tangible context for skip sizes (e.g., what does "4 cubic yards" really mean?).
  - Important information, like road placement restrictions, was not sufficiently prominent.
  - The selection mechanism (a small button) could be improved for discoverability and ease of use.

2.  User-Centered Enhancements
  - I added descriptive text to each skip card, translating cubic yardage into relatable terms like "bin bags" or "washing machines." This imediately helps users visualize the capacity.
  - "Not allowed on road" information was elevated with a distinct warning box and an overlay that disables interaction, providing immediate visual feedback and preventing selection errors.
  - "Unsure which skip size you need?" section was introduced. This anticipates common user questions and provides quick, actionable advice on waste  types and road placement considerations, reducing friction in the decision-making process.


3.  Technical Implementation
  - The solution leverages React components for modularity and reusability (`SkipCard`, `ImageRenderer`, `SkipSelector`).
  - State management is handled effectively within the `App` component to control selected skips and data fetching.
  - Tailwind CSS was chosen for its utility-first approach, allowing for rapid and consistent styling. `lucide-react` provides modern, scalable icons.
  - Get Data from the endpoint provided.

## Technologies Used

- React Frontend JavaScript library for building user interfaces.
- Tailwind CSS A utility-first CSS framework for rapid UI development.
- Lucide React Icon library for clean, modern icons.
- Vite Fast development build tool (assumed from typical React setups).

## Setup and Installation

1. - Clone the repository
    ```bash
    git clone 
    cd skip-waste
    ```
2. - Install dependencies
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Run the development server
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically be available at `http://localhost:5173`.

## Project Structure

- `src/App.tsx`: Main application component managing overall state and layout.
- `src/components/`: Contains reusable UI components (`SkipCard`, `SkipSelector`, `Header`, `SelectedCard`, `ImageRenderer`).
- `src/services/apiService.ts`: Handles data fetching for skip information.
- `public/assets/`: Stores skip images and fallback image.
- `src/types/allTypes.ts` : Contains all the interfaces.
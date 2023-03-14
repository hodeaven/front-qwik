import { component$} from '@builder.io/qwik';
import {
  type DocumentHead,
  routeLoader$,
  routeAction$,
  zod$,
  z,
} from '@builder.io/qwik-city';


interface ListItem {
  text: string;
}

export const list: ListItem[] = [];

export const useListLoader = routeLoader$(() => {
  return list;
});

export const useAddToListAction = routeAction$(
  (item) => {
    list.push(item);
    return {
      success: true,
    };
  },
  zod$({
    text: z.string(),
  })
);

export default component$(() => {

  return (
    <>
      <div class='intro'>
        <h1> 🟣Getting Started Qwikly</h1>
        <p>Qwik is a new kind of framework that is resumable (no JS and no hydration), built for the edge and familiar for React developers.</p>

        <li>Stackblitz Qwik + Vite</li>
        <li>Examples playground</li><br />

        <h1>🟣 Prerequisites</h1>
        <li>Node.js v16.8 or higher</li>
        <li>Your favorite IDE (vscode recommended)</li>
        <li>Start to think qwik</li><br />
      </div>
      <h1>🟣 Run the Qwik CLI in your shell. 🐰</h1>
      <p> Choose the package manager you prefer and run one of the following command:</p>
      <div class='card'>
      <ul><code>npm create qwik@latest</code></ul>
      <ul><code>pnpm create qwik@latest</code></ul>
      <ul><code>yarn create qwik</code></ul>
      </div>
      
      <p>The CLI will guide you through an interactive menu to set the project-name, select one of the starters and asks if you want to install the dependencies.</p>

  
    
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik To-Do',
};

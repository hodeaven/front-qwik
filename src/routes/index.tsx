import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { getContent, RenderContent, getBuilderSearchParams } from "@builder.io/sdk-qwik";

export const BUILDER_PUBLIC_API_KEY = "9b86be576e034c97a70d1e3466dd4eb1"; // <-- Add your Public API KEY here
export const BUILDER_MODEL = "login";

export default component$(() => {
  const location = useLocation();
  const builderContentRsrc = useResource$<any>(() => {
    return getContent({
      model: BUILDER_MODEL,
      apiKey: BUILDER_PUBLIC_API_KEY,
      options: getBuilderSearchParams(location.query),
      userAttributes: {
        urlPath: location.pathname || "/",
      },
    });
  });

  return (
    <Resource
      value={builderContentRsrc}
      onPending={() => <div>Loading...</div>}
      onResolved={(content) => (
        <RenderContent
          model={BUILDER_MODEL}
          content={content}
          apiKey={BUILDER_PUBLIC_API_KEY}
        />
      )}
    />
  );
});
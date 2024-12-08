import React, { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DogBreeds />
      <DogFacts />
      <DogGroups />
    </QueryClientProvider>
  );
}

function DogBreeds() {
  const [selectedBreedId, setSelectedBreedId] = useState(null);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["dogBreeds"],
    queryFn: async () => {
      const response = await fetch("https://dogapi.dog/api/v2/breeds");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Dog Breeds</h2>
      <ul>
        {data?.data?.map((breed) => (
          <li key={breed.id}>
            {breed.attributes.name} -{" "}
            <button onClick={() => setSelectedBreedId(breed.id)}>
              Details
            </button>
          </li>
        ))}
      </ul>
      {selectedBreedId && <BreedDetails breedId={selectedBreedId} />}
    </div>
  );
}

function BreedDetails({ breedId }) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["breedDetails", breedId],
    queryFn: async () => {
      const response = await fetch(
        `https://dogapi.dog/api/v2/breeds/${breedId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>{data?.data?.attributes?.name || "Breed name not available"}</h3>
      <p>
        Description:{" "}
        {data?.data?.attributes?.description || "No description available"}
      </p>
      <p>
        Life Expectancy: {data?.data?.attributes?.life?.min} -{" "}
        {data?.data?.attributes?.life?.max} years
      </p>
      <p>
        Male Weight: {data?.data?.attributes?.male_weight?.min} -{" "}
        {data?.data?.attributes?.male_weight?.max} kg
      </p>
      <p>
        Female Weight: {data?.data?.attributes?.female_weight?.min} -{" "}
        {data?.data?.attributes?.female_weight?.max} kg
      </p>
      <p>
        Hypoallergenic: {data?.data?.attributes?.hypoallergenic ? "Yes" : "No"}
      </p>
    </div>
  );
}

function DogFacts() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["dogFacts"],
    queryFn: async () => {
      const response = await fetch("https://dogapi.dog/api/v2/facts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    },
  });

  if (isLoading) return <div>Loading dog facts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Dog Facts</h2>
      <ul>
        {data?.data?.map((fact, index) => (
          <li key={index}>{fact.attributes?.body || "Fact not available"}</li>
        ))}
      </ul>
    </div>
  );
}

function DogGroups() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["dogGroups"],
    queryFn: async () => {
      const response = await fetch("https://dogapi.dog/api/v2/groups");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    },
  });

  if (isLoading) return <div>Loading dog groups...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Dog Groups</h2>
      <ul>
        {data?.data?.map((group) => (
          <li key={group.id}>
            {group.attributes.name || "Group name not available"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

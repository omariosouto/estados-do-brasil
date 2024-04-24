"use client";

import React from "react";
import Select, { Option } from "./src/components/Select";
import { brasilStates } from "./src/data/data";

export default function HomeScreen() {
  const states = Object.values(brasilStates);
  const [state, setState] = React.useState("");
  const [cities, setCities] = React.useState<Option[]>([]);
  const hasNoCities = cities.length === 0;

  React.useEffect(() => {
    if (state) {
      fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${state}`, {
        method: "GET",
      })
      .then(response => response.json())
      .then(data => {
        setCities(data.map(({ nome }) => {
          return {
            value: nome,
            label: nome,
          }
        }));
      })
    }
  }, [state]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">


        <h1 className="text-3xl font-bold text-primary text-center">
          Brasil 🇧🇷
        </h1>

        <Select
          label="Estado"
          options={states}
          onChange={(event) => setState(event.target.value)}
        />

        <Select
          label="Munícipio"
          options={cities}
          disabled={hasNoCities}
          className="mt-6"
        />
      </div>
    </div>
  )
}
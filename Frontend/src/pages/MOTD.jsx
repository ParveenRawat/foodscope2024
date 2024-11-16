import React from "react";
import Layout from "../components/layout/Layout";

const MoleculeDetails = () => {
  const molecule = {
    name: "3-Methyl-2-oxopentanoic acid",
    iupacName: "3-methyl-2-oxopentanoic acid",
    commonName: "3-Methyl-2-oxovaleric acid",
    molecularWeight: 130.143,
    monoisotopicMass: 130.063,
    exactMass: 130.063,
    tpsa: 54.4,
    complexity: 128.0,
    xlogp: 1.1,
    functionalGroups: [
      "Carbonyl compound",
      "Ketone",
      "Carboxylic acid derivative",
      "Carboxylic acid",
    ],
    hbdCount: 1,
    hbaCount: 3,
    rotatableBonds: 3,
    charge: 0,
    flavorProfile: "Fruit",
    bitterTaste: 0,
    bondStereoCount: 0,
    atomStereoCount: 1,
    naturalOrSynthetic: "Synthetic",
  };

  return (
    <div className="p-8 border-b bg-gradient-to-b from-green to-green via-cream w-full text-white  shadow-xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold  text-black ">
          Molecule of the Day: {molecule.name}
        </h1>
        <p className="text-lg font-light text-jade mt-2">
          {molecule.commonName}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Key Properties Section */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Key Properties
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong>IUPAC Name:</strong> {molecule.iupacName}
            </li>
            <li>
              <strong>Molecular Weight:</strong> {molecule.molecularWeight}{" "}
              g/mol
            </li>
            <li>
              <strong>Monoisotopic Mass:</strong> {molecule.monoisotopicMass}{" "}
              g/mol
            </li>
            <li>
              <strong>Topological Polar Surface Area (TPSA):</strong>{" "}
              {molecule.tpsa} Å²
            </li>
            <li>
              <strong>Complexity:</strong> {molecule.complexity}
            </li>
            <li>
              <strong>XlogP:</strong> {molecule.xlogp}
            </li>
            <li>
              <strong>Charge:</strong> {molecule.charge}
            </li>
          </ul>
        </div>

        {/* Structural and Chemical Information Section */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Structural and Chemical Information
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong>Functional Groups:</strong>{" "}
              {molecule.functionalGroups.join(", ")}
            </li>
            <li>
              <strong>Hydrogen Bond Donor (HBD) Count:</strong>{" "}
              {molecule.hbdCount}
            </li>
            <li>
              <strong>Hydrogen Bond Acceptor (HBA) Count:</strong>{" "}
              {molecule.hbaCount}
            </li>
            <li>
              <strong>Rotatable Bonds:</strong> {molecule.rotatableBonds}
            </li>
            <li>
              <strong>Stereochemistry:</strong> {molecule.atomStereoCount} atom
              stereocenter (undefined)
            </li>
            <li>
              <strong>Flavor Profile:</strong> {molecule.flavorProfile}
            </li>
            <li>
              <strong>Bitter Taste:</strong>{" "}
              {molecule.bitterTaste === 0 ? "No bitterness" : "Bitter"}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl text-black font-semibold  mb-4">
          Miscellaneous
        </h2>
        <ul className="space-y-3 text-jade">
          <li>
            <strong>Natural or Synthetic:</strong> {molecule.naturalOrSynthetic}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Layout()(MoleculeDetails);

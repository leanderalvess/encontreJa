import type { PaginatedApiResponse, PaginatedResponse, PaginatedResponsePerson, Person } from "../interfaces/api";

/**
 * Parses the response from the API and returns a structured list of persons.
 */
export const parserFetchPersons = async (data: PaginatedApiResponse): Promise<PaginatedResponse<Person>> => {
    return {
        ...data,
        content: data.content.map(item => parsePerson(item))
    };
};

/**
 * Parses a single person record.
 */
export const parsePerson = (data: PaginatedResponsePerson): Person => {
    return {
        id: data.id,
        name: data.nome,
        age: data.idade,
        sex: data.sexo,
        alive: data.vivo,
        urlPhoto: data.urlFoto || null,
        missingDate: data.ultimaOcorrencia?.dtDesaparecimento || "Data não informada",
        missingLocal: data.ultimaOcorrencia?.localDesaparecimentoConcat || "Local não informado"
    };
};

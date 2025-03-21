import axios from "axios";
import { parsePerson, parserFetchPersons } from "../helper/parsers";
import type { PaginatedResponse, Person, ReportRequest, ReportResponse } from "../interfaces/api";

const API_BASE_URL = "https://abitus-api.geia.vip/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const fetchPersons = async (
  page: number = 0,
  perPage: number = 12
): Promise<PaginatedResponse<Person>> => {
  const response = await api.get("/pessoas/aberto", {
    params: { pagina: page, porPagina: perPage, direcao: "DESC", status: "DESAPARECIDO" },
  });

  return parserFetchPersons(response.data);
};

export const fetchPersonsFiltered = async (
  filters: {
    name?: string;
    minAge?: number;
    maxAge?: number;
    sex?: string;
  },
  page: number = 0,
  perPage: number = 12
): Promise<PaginatedResponse<Person>> => {
  const response = await api.get("/pessoas/aberto/filtro", {
    params: {
      nome: filters.name || "",
      faixaldadeInicial: filters.minAge || 0,
      faixaldadeFinal: filters.maxAge || 0,
      sexo: filters.sex || "",
      pagina: page,
      porPagina: perPage,
      status: "DESAPARECIDO",
    },
  });
  return parserFetchPersons(response.data);
};

export const fetchPersonById = async (id: number): Promise<Person> => {
  const response = await api.get(`/pessoas/${id}`);
  return parsePerson(response.data);
};

export const submitReport = async (report: ReportRequest): Promise<ReportResponse> => {
  const formData = new FormData();
  formData.append("personId", report.personId.toString());
  formData.append("description", report.description);
  formData.append("location", report.location);
  if (report.image) formData.append("image", report.image);

  const response = await api.post(`/informacoes`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};

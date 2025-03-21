export interface Person {
  id: number;
  name: string;
  age: number;
  sex: string;
  alive: boolean;
  urlPhoto?: string | null;
  missingDate: string;
  missingLocal: string;
}

export interface occurrenceInterviewDesapDTO{
  informacao: string,
  vestimentasDesaparecido: string
}

export interface lastOccurrenceDto {
  dataLocalizacao: Date,
  dtDesaparecimento: string,
  encontradoVivo: boolean,
  listaCartaz: Array<string>,
  localDesaparecimentoConcat: string,
  ocoId: number,
  ocorrenciaEntrevDesapDTO: occurrenceInterviewDesapDTO,
}

export interface PaginatedResponsePerson {
  id: number,
  idade: number,
  nome: string,
  sexo: string,
  ultimaOcorrencia: lastOccurrenceDto,
  urlFoto: string
  vivo: boolean
}

export interface PaginatedApiResponse {
  content: PaginatedResponsePerson[];
  totalElements: number;
  totalPages: number;
  currentPage: number;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  currentPage: number;
}

export interface ReportRequest {
  personId: number;
  description: string;
  location: string;
  image?: File;
}

export interface ReportResponse {
  success: boolean;
  message: string;
}

export type OrderSearch = 'ASC' | 'DESC'
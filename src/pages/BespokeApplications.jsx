import DetailPage from "../components/DetailPage";
import { detailPages } from "../data/detailPages";

export default function BespokeApplications() {
  return <DetailPage data={detailPages["bespoke-applications"]} />;
}

import { useDispatch } from "react-redux";
import { initiate } from "@/redux/features/sidebar-slice";
import { AppDispatch, useMiniSelector } from "@/redux/store";

export function useSidebarToggle() {
  const dispatch = useDispatch<AppDispatch>();
  const sidebarOpen = useMiniSelector((state) => state.sidebarSlice.open);

  return function handleSidebarToggle() {
    dispatch(initiate(!sidebarOpen));
  };
}

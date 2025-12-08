import { useEffect } from "react";
import { category } from "../../services/category";
import { cn } from "../../utils/utils";
import { useState } from "react";
import {Link} from "react-router"

const Category = () => {
  const [toggle, setToggle] = useState(false)
  const [cat, setCat] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setCat(await category(toggle))
    }
    fetchData();
  }, [toggle]);

  const bOnClick = (event) => {
    event.preventDefault()
    setToggle(previousState => !previousState)
  }

  return (
    <div className="flex gap-2.5">
      {cat.map(item => <Link  to="/result" key={item.id} className="bg-slate-800 px-3 py-1.5 rounded-xl">{item.title}</Link> )}
      <div className={cn(["bg-slate-800 px-3 py-1.5 rounded-xl" && toggle ? "hidden" : "block"])}>
        <button className="bg-slate-800 px-3 py-1.5 rounded-xl" onClick={bOnClick}>LoadMore <span className="ml-2">❯</span></button>
      </div>
    </div>
  );
};
export default Category;

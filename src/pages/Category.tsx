import CategoryTable from "../features/category/CategoryTable";
import Header from "../ui/Header";
function Category() {
    return (
            <>
                <Header />
                <div className="page-body">
                    <div className="container-xl">
                        <CategoryTable />
                    </div>
                </div>
            </>
    );
}

export default Category;
